package com.example.repository;

import com.example.model.FileMetadata;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FileMetadataRepository extends JpaRepository<FileMetadata, Long> {
    List<FileMetadata> findByFilenameContainingIgnoreCase(String filename);
    List<FileMetadata> findByContentType(String contentType);
}