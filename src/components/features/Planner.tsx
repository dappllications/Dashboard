import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Target, CheckCircle, AlertCircle, Plus } from "lucide-react";

export function Planner() {
  const projects = [
    {
      id: 1,
      name: "DeFi Yield Farming dApp",
      description: "Multi-chain yield optimization platform",
      status: "in-progress",
      progress: 75,
      deadline: "2024-02-15",
      priority: "high",
      tasks: 12,
      completedTasks: 9
    },
    {
      id: 2,
      name: "NFT Marketplace V2",
      description: "Enhanced marketplace with advanced features",
      status: "planning",
      progress: 25,
      deadline: "2024-03-20",
      priority: "medium",
      tasks: 18,
      completedTasks: 4
    },
    {
      id: 3,
      name: "Cross-Chain Bridge",
      description: "Secure asset transfer between chains",
      status: "completed",
      progress: 100,
      deadline: "2024-01-30",
      priority: "high",
      tasks: 15,
      completedTasks: 15
    },
    {
      id: 4,
      name: "DAO Governance Platform",
      description: "Decentralized voting and proposal system",
      status: "in-progress",
      progress: 45,
      deadline: "2024-04-10",
      priority: "low",
      tasks: 22,
      completedTasks: 10
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: "Smart Contract Security Audit",
      project: "DeFi Yield Farming dApp",
      dueDate: "Today",
      priority: "high",
      estimated: "4 hours"
    },
    {
      id: 2,
      title: "Frontend Integration Testing",
      project: "NFT Marketplace V2",
      dueDate: "Tomorrow",
      priority: "medium",
      estimated: "6 hours"
    },
    {
      id: 3,
      title: "Documentation Update",
      project: "Cross-Chain Bridge",
      dueDate: "Jan 25",
      priority: "low",
      estimated: "2 hours"
    },
    {
      id: 4,
      title: "Gas Optimization Review",
      project: "DAO Governance Platform",
      dueDate: "Jan 26",
      priority: "medium",
      estimated: "3 hours"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in-progress": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-4 h-4 text-green-400" />;
      case "in-progress": return <Clock className="w-4 h-4 text-blue-400" />;
      default: return <AlertCircle className="w-4 h-4 text-yellow-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            Project Planner
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your dApp development projects and tasks
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-primary">Active Projects</span>
              </CardTitle>
              <CardDescription>Track your dApp development progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="p-4 bg-background/50 rounded-lg border border-border/50 hover:bg-background/70 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {getStatusIcon(project.status)}
                          <h4 className="font-semibold text-foreground">{project.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <Badge className={getPriorityColor(project.priority)}>
                          {project.priority}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Due: {project.deadline}</span>
                        </div>
                        <div className="text-muted-foreground">
                          Tasks: {project.completedTasks}/{project.tasks}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-primary">Upcoming Tasks</span>
              </CardTitle>
              <CardDescription>Your next deliverables</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="p-3 bg-background/50 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-sm">{task.title}</h5>
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{task.project}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{task.dueDate}</span>
                      <span>{task.estimated}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-primary">Project Statistics</CardTitle>
              <CardDescription>Development metrics overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Projects</span>
                  <span className="font-bold text-2xl">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Completed</span>
                  <span className="font-bold text-2xl text-green-400">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">In Progress</span>
                  <span className="font-bold text-2xl text-blue-400">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Planning</span>
                  <span className="font-bold text-2xl text-yellow-400">1</span>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <div className="text-sm text-muted-foreground mb-1">Success Rate</div>
                  <div className="text-2xl font-bold text-primary">92.3%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}