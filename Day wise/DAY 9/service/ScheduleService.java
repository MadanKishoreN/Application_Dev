package com.example.backend.service;

import com.example.backend.model.ScheduleModel;
import com.example.backend.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    public List<ScheduleModel> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    public Optional<ScheduleModel> getScheduleById(Long id) {
        return scheduleRepository.findById(id);
    }

    public ScheduleModel createSchedule(ScheduleModel schedule) {
        return scheduleRepository.save(schedule);
    }

    public ScheduleModel updateSchedule(Long id, ScheduleModel scheduleDetails) {
        ScheduleModel schedule = scheduleRepository.findById(id).orElseThrow(() -> new RuntimeException("Schedule not found"));
        schedule.setJobId(scheduleDetails.getJobId());
        schedule.setUser(scheduleDetails.getUser());
        schedule.setCompany(scheduleDetails.getCompany());
        schedule.setInterviewDate(scheduleDetails.getInterviewDate());
        schedule.setInterviewTime(scheduleDetails.getInterviewTime());
        schedule.setStatus(scheduleDetails.getStatus());
        return scheduleRepository.save(schedule);
    }

    public void deleteSchedule(Long id) {
        scheduleRepository.deleteById(id);
    }
}
