package com.tuievolution.controller;

import com.tuievolution.model.TeamMember;
import com.tuievolution.repository.TeamMemberRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/team") // BURAYI DEĞİŞTİRDİK: "/api/projects" çakışıyordu
@CrossOrigin(origins = "*") // Ek güvenlik için
public class TeamMemberController {

    private final TeamMemberRepository teamMemberRepository;

    public TeamMemberController(TeamMemberRepository teamMemberRepository) {
        this.teamMemberRepository = teamMemberRepository;
    }

    @GetMapping
    public List<TeamMember> getAllMembers() {
        return teamMemberRepository.findAll();
    }
}