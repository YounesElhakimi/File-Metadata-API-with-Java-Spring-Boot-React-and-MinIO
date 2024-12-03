package com.example.controller;

import com.example.model.FileMetadata;
import com.example.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class FileController {
    private final FileService fileService;

    @PostMapping("/upload")
    public FileMetadata uploadFile(@RequestParam("file") MultipartFile file) throws Exception {
        return fileService.uploadFile(file);
    }

    @GetMapping("/search")
    public List<FileMetadata> searchFiles(
            @RequestParam(required = false) String filename,
            @RequestParam(required = false) String contentType) {
        if (filename != null) {
            return fileService.searchByFilename(filename);
        } else if (contentType != null) {
            return fileService.searchByContentType(contentType);
        }
        return fileService.searchByFilename("");
    }

    @GetMapping("/download/{objectKey}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String objectKey) throws Exception {
        byte[] data = fileService.downloadFile(objectKey);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment")
                .body(data);
    }
}