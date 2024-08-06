package com.example.backend.controller;

import com.example.backend.model.ScheduleModel;
import com.example.backend.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/schedules")
public class ScheduleController {

    @Autowired
    private ScheduleService scheduleService;

    @GetMapping
    public List<ScheduleModel> getAllSchedules() {
        return scheduleService.getAllSchedules();
    }
 
    @GetMapping("/{id}")
    public ResponseEntity<ScheduleModel> getScheduleById(@PathVariable Long id) {
        Optional<ScheduleModel> schedule = scheduleService.getScheduleById(id);
        return schedule.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    
    @PostMapping
    public ScheduleModel createSchedule(@RequestBody ScheduleModel schedule) {
        return scheduleService.createSchedule(schedule);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ScheduleModel> updateSchedule(@PathVariable Long id, @RequestBody ScheduleModel scheduleDetails) {
        Optional<ScheduleModel> schedule = scheduleService.getScheduleById(id);
        if (schedule.isPresent()) {
            ScheduleModel updatedSchedule = scheduleService.updateSchedule(id, scheduleDetails);
            return ResponseEntity.ok(updatedSchedule);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSchedule(@PathVariable Long id) {
        if (scheduleService.getScheduleById(id).isPresent()) {
            scheduleService.deleteSchedule(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
