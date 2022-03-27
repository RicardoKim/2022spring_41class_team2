package com.example.server.controller;

import com.example.server.dto.RequestDTO;
import com.example.server.dto.ResponseDTO;
import org.python.util.PythonInterpreter;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.StringWriter;

@Controller
public class TestController {
    private static PythonInterpreter interpreter;

    @PostMapping("api/v1/test")
    public ResponseEntity<?> TestMethod(@RequestBody RequestDTO codeRequest){
        StringWriter out = new StringWriter();
        interpreter = new PythonInterpreter();
        interpreter.setOut(out);
        interpreter.setErr(out);
        try{
            interpreter.exec(codeRequest.getCode());
        }
        catch(Exception e){
            return ResponseEntity.ok(e.getMessage());
        }

        return ResponseEntity.ok().body(ResponseDTO.builder().statusCode(200).data(out.toString()).build());
    }
}
