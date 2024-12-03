package com.example.service;

import com.example.model.FileMetadata;
import com.example.repository.FileMetadataRepository;
import io.minio.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FileService {
    private final MinioClient minioClient;
    private final FileMetadataRepository repository;

    @Value("${minio.bucket}")
    private String bucketName;

    public FileMetadata uploadFile(MultipartFile file) throws Exception {
        // Create bucket if it doesn't exist
        if (!minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build())) {
            minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
        }

        // Generate unique object key
        String objectKey = UUID.randomUUID().toString();

        // Upload to MinIO
        minioClient.putObject(
            PutObjectArgs.builder()
                .bucket(bucketName)
                .object(objectKey)
                .stream(file.getInputStream(), file.getSize(), -1)
                .contentType(file.getContentType())
                .build()
        );

        // Save metadata
        FileMetadata metadata = new FileMetadata();
        metadata.setFilename(file.getOriginalFilename());
        metadata.setContentType(file.getContentType());
        metadata.setSize(file.getSize());
        metadata.setS3ObjectKey(objectKey);
        metadata.setUploadDate(LocalDateTime.now());

        return repository.save(metadata);
    }

    public List<FileMetadata> searchByFilename(String filename) {
        return repository.findByFilenameContainingIgnoreCase(filename);
    }

    public List<FileMetadata> searchByContentType(String contentType) {
        return repository.findByContentType(contentType);
    }

    public byte[] downloadFile(String objectKey) throws Exception {
        GetObjectResponse response = minioClient.getObject(
            GetObjectArgs.builder()
                .bucket(bucketName)
                .object(objectKey)
                .build()
        );
        return response.readAllBytes();
    }
}