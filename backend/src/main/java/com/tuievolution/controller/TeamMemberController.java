package com.tuievolution.controller;

import com.tuievolution.model.TeamMember;
import com.tuievolution.repository.TeamMemberRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "tuievolutionportfolio-mfd3iwib4-tuievolutions-projects.vercel.app") // Buraya Vercel linkinizi yazın
@RestController
@RequestMapping("/api/projects")
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