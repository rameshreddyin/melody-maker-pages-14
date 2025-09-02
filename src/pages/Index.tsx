import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Users, 
  Award, 
  Clock, 
  ArrowRight, 
  Star, 
  Music, 
  Guitar,
  Piano,
  Drum,
  Keyboard,
  Mic,
  Music4
} from "lucide-react";
import heroImage from "@/assets/music-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5 text-music-purple" />
              <span className="text-sm font-medium">Trusted by 10,000+ Students</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Musical Journey</span> with Expert Courses
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Get access to professional music courses with flexible learning paths, 
                expert instruction, and hands-on practice. Start your musical adventure today!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Learning
              </Button>
              
              <Button variant="outline" size="lg" className="border-music-purple text-music-purple hover:bg-music-purple hover:text-white">
                Browse Courses
              </Button>
            </div>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-music-purple rounded-full"></div>
                <span className="text-muted-foreground">Interactive Lessons</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-music-pink rounded-full"></div>
                <span className="text-muted-foreground">Expert Instructors</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-music-orange rounded-full"></div>
                <span className="text-muted-foreground">Flexible Schedule</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-music-yellow rounded-full"></div>
                <span className="text-muted-foreground">Certificate Program</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-3xl shadow-glow">
              <img 
                src={heroImage} 
                alt="Music learning with colorful instruments and sheet music" 
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Course Cards */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-card animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Guitar Masterclass</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>2,847 students</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-card animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Piano Fundamentals</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>8 weeks course</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-music-purple/20 via-transparent to-music-pink/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg mb-4">Pick Your Path</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-music-orange">Epic Courses</span> Await
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Guitar Course */}
          <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in">
            <div className="text-center space-y-6">
              <div className="text-sm text-muted-foreground font-medium">Best for start</div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Guitar</h3>
                <p className="text-sm text-muted-foreground">Beginner–Advanced • Board Prep</p>
              </div>

              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-accent/10 p-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <Guitar className="w-12 h-12 text-music-orange" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Group/Solo</span>
                  <span>60 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>1–2×/week</span>
                  <span>Certifications</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-music-orange/10 text-music-orange border-0">
                  Acoustic
                </Badge>
                <Badge variant="secondary" className="bg-music-yellow/10 text-music-yellow border-0">
                  Electric
                </Badge>
              </div>

              <Button variant="music" className="w-full group">
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Piano Course */}
          <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-gradient-primary text-white border-0 px-4 py-1">
                <Star className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            </div>
            
            <div className="text-center space-y-6">
              <div className="text-sm text-muted-foreground font-medium">Popular direction</div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Piano</h3>
                <p className="text-sm text-muted-foreground">Beginner–Advanced • Board Prep</p>
              </div>

              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-primary/10 p-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <Piano className="w-12 h-12 text-music-purple" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Group/Solo</span>
                  <span>60 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>1–2×/week</span>
                  <span>Certifications</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-music-purple/10 text-music-purple border-0">
                  Classical
                </Badge>
                <Badge variant="secondary" className="bg-music-pink/10 text-music-pink border-0">
                  Jazz
                </Badge>
              </div>

              <Button variant="hero" className="w-full group">
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Drums Course */}
          <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in">
            <div className="text-center space-y-6">
              <div className="text-sm text-muted-foreground font-medium">For experienced musicians</div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Drums</h3>
                <p className="text-sm text-muted-foreground">Beginner–Advanced • Board Prep</p>
              </div>

              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-primary/10 p-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <Drum className="w-12 h-12 text-music-pink" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Group/Solo</span>
                  <span>60 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>1–2×/week</span>
                  <span>Certifications</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-music-purple/10 text-music-purple border-0">
                  Rock
                </Badge>
                <Badge variant="secondary" className="bg-music-pink/10 text-music-pink border-0">
                  Jazz
                </Badge>
              </div>

              <Button variant="music" className="w-full group">
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Keyboard Course */}
          <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in">
            <div className="text-center space-y-6">
              <div className="text-sm text-muted-foreground font-medium">Digital exploration</div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Keyboard</h3>
                <p className="text-sm text-muted-foreground">Beginner–Advanced • Board Prep</p>
              </div>

              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-accent/10 p-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <Keyboard className="w-12 h-12 text-music-yellow" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Group/Solo</span>
                  <span>60 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>1–2×/week</span>
                  <span>Certifications</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-music-orange/10 text-music-orange border-0">
                  Electronic
                </Badge>
                <Badge variant="secondary" className="bg-music-yellow/10 text-music-yellow border-0">
                  Synthesis
                </Badge>
              </div>

              <Button variant="accent" className="w-full group">
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Western Vocals Course */}
          <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in">
            <div className="text-center space-y-6">
              <div className="text-sm text-muted-foreground font-medium">Express your voice</div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Western Vocals</h3>
                <p className="text-sm text-muted-foreground">Beginner–Advanced • Board Prep</p>
              </div>

              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-primary/10 p-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <Mic className="w-12 h-12 text-music-purple" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Group/Solo</span>
                  <span>60 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>1–2×/week</span>
                  <span>Certifications</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-music-purple/10 text-music-purple border-0">
                  Pop
                </Badge>
                <Badge variant="secondary" className="bg-music-pink/10 text-music-pink border-0">
                  Classical
                </Badge>
              </div>

              <Button variant="hero" className="w-full group">
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Percussion Course */}
          <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in">
            <div className="text-center space-y-6">
              <div className="text-sm text-muted-foreground font-medium">World rhythms</div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Percussion</h3>
                <p className="text-sm text-muted-foreground">Cajon/Djembe • Beginner–Advanced</p>
              </div>

              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-accent/10 p-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <Music4 className="w-12 h-12 text-music-orange" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Group/Solo</span>
                  <span>60 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>1–2×/week</span>
                  <span>Certifications</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-music-orange/10 text-music-orange border-0">
                  Cajon
                </Badge>
                <Badge variant="secondary" className="bg-music-yellow/10 text-music-yellow border-0">
                  Djembe
                </Badge>
              </div>

              <Button variant="accent" className="w-full group">
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Stats Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-music-purple">150+</div>
            <div className="text-muted-foreground">Courses Available</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-music-pink">10k+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-music-orange">50+</div>
            <div className="text-muted-foreground">Expert Teachers</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-music-yellow">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;