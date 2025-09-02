import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  Music4,
  Smile,
  CreditCard,
  BarChart3,
  Settings,
  Calendar,
  UserPlus,
  PlayCircle,
  HeadphonesIcon
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

      {/* Affiliations Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Trusted by <span className="text-music-orange">100+</span> Global Music 
            <br />
            <span className="text-music-purple">Institutions</span> & Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leading music schools, conservatories, and educational partners collaborate with us 
            to deliver world-class music education and expand learning opportunities globally.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8 items-center">
            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-purple/10 to-music-purple/5 rounded-2xl border border-music-purple/20 hover:border-music-purple/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-purple rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Music className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-purple">Berklee</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-orange/10 to-music-orange/5 rounded-2xl border border-music-orange/20 hover:border-music-orange/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-orange rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Piano className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-orange">Juilliard</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-pink/10 to-music-pink/5 rounded-2xl border border-music-pink/20 hover:border-music-pink/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-pink rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Guitar className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-pink">RNCM</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-yellow/10 to-music-yellow/5 rounded-2xl border border-music-yellow/20 hover:border-music-yellow/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-yellow rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Drum className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-yellow">Curtis</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-red/10 to-music-red/5 rounded-2xl border border-music-red/20 hover:border-music-red/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-red rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Mic className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-red">Eastman</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-purple/10 to-music-purple/5 rounded-2xl border border-music-purple/20 hover:border-music-purple/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-purple rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Keyboard className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-purple">Oberlin</span>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-orange/10 to-music-orange/5 rounded-2xl border border-music-orange/20 hover:border-music-orange/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-orange rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Music4 className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-orange">BIMM</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-pink/10 to-music-pink/5 rounded-2xl border border-music-pink/20 hover:border-music-pink/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-pink rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Guitar className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-pink">MI</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-yellow/10 to-music-yellow/5 rounded-2xl border border-music-yellow/20 hover:border-music-yellow/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-yellow rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Piano className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-yellow">ABRSM</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-red/10 to-music-red/5 rounded-2xl border border-music-red/20 hover:border-music-red/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-red rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Drum className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-red">Trinity</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-purple/10 to-music-purple/5 rounded-2xl border border-music-purple/20 hover:border-music-purple/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-purple rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Mic className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-purple">RCM</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-20 bg-gradient-to-br from-music-orange/10 to-music-orange/5 rounded-2xl border border-music-orange/20 hover:border-music-orange/40 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-8 h-8 bg-music-orange rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <Music className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-music-orange">Yamaha</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Frequently Asked <span className="text-music-orange">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These are the most commonly asked questions about MuSoclef Music Education.
              Can't find what you're looking for? <span className="text-music-purple underline cursor-pointer hover:text-music-pink transition-colors">Chat to our friendly team!</span>
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="default" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
            >
              General
            </Button>
            <Button 
              variant="outline" 
              className="border-border text-foreground hover:bg-muted rounded-full px-6"
            >
              Pricing
            </Button>
            <Button 
              variant="outline" 
              className="border-border text-foreground hover:bg-muted rounded-full px-6"
            >
              Courses
            </Button>
            <Button 
              variant="outline" 
              className="border-border text-foreground hover:bg-muted rounded-full px-6"
            >
              Support
            </Button>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1" className="border border-border rounded-2xl px-6 mb-4">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-music-purple/10 to-music-purple/5 rounded-xl border border-music-purple/20 flex items-center justify-center flex-shrink-0">
                      <Smile className="w-5 h-5 text-music-purple" />
                    </div>
                    <span className="text-lg font-semibold">Is there a free trial available?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 ml-16">
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, you can try our platform for free for 7 days. We'll provide you with access to 3 introductory courses 
                    and a free 30-minute consultation with one of our music instructors to help you get started. 
                    <span className="text-music-purple underline cursor-pointer hover:text-music-pink transition-colors">Book a session here.</span>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-2xl px-6 mb-4">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-music-orange/10 to-music-orange/5 rounded-xl border border-music-orange/20 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-5 h-5 text-music-orange" />
                    </div>
                    <span className="text-lg font-semibold">Can I change my plan later?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 ml-16">
                  <p className="text-muted-foreground leading-relaxed">
                    Absolutely! You can upgrade or downgrade your plan at any time. Changes will take effect at the beginning 
                    of your next billing cycle, and we'll prorate any differences in pricing.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-2xl px-6 mb-4">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-music-pink/10 to-music-pink/5 rounded-xl border border-music-pink/20 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-music-pink" />
                    </div>
                    <span className="text-lg font-semibold">What is your cancellation policy?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 ml-16">
                  <p className="text-muted-foreground leading-relaxed">
                    You can cancel your subscription at any time. Your access will continue until the end of your current billing period, 
                    and you won't be charged for the following month. All your progress and certificates remain accessible.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-2xl px-6 mb-4">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-music-yellow/10 to-music-yellow/5 rounded-xl border border-music-yellow/20 flex items-center justify-center flex-shrink-0">
                      <UserPlus className="w-5 h-5 text-music-yellow" />
                    </div>
                    <span className="text-lg font-semibold">Can I add multiple students to my account?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 ml-16">
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! Our Family Plan allows up to 4 students per account with individual progress tracking. 
                    Each student gets their own dashboard and can learn at their own pace across different instruments.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-2xl px-6 mb-4">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-music-purple/10 to-music-purple/5 rounded-xl border border-music-purple/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-music-purple" />
                    </div>
                    <span className="text-lg font-semibold">How does scheduling work?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 ml-16">
                  <p className="text-muted-foreground leading-relaxed">
                    Our platform offers both self-paced learning and scheduled live sessions. You can book one-on-one lessons 
                    with certified instructors based on your availability, or join group sessions that run throughout the week.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-2xl px-6 mb-4">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-music-orange/10 to-music-orange/5 rounded-xl border border-music-orange/20 flex items-center justify-center flex-shrink-0">
                      <Settings className="w-5 h-5 text-music-orange" />
                    </div>
                    <span className="text-lg font-semibold">How does support work?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 ml-16">
                  <p className="text-muted-foreground leading-relaxed">
                    We offer 24/7 technical support via chat and email, plus dedicated music instruction support during business hours. 
                    Our community forum is also available for peer-to-peer learning and discussion.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border rounded-2xl px-6 mb-4">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-music-pink/10 to-music-pink/5 rounded-xl border border-music-pink/20 flex items-center justify-center flex-shrink-0">
                      <PlayCircle className="w-5 h-5 text-music-pink" />
                    </div>
                    <span className="text-lg font-semibold">Do you provide video tutorials?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 ml-16">
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! Every course includes high-quality HD video lessons, interactive exercises, sheet music, and backing tracks. 
                    You also get access to our mobile app for learning on the go with offline content downloads.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-music-purple/5 via-music-pink/5 to-music-orange/5 rounded-3xl p-12 lg:p-16 shadow-glow animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-card">
              <Music className="w-5 h-5 text-music-orange" />
              <span className="text-sm font-medium text-muted-foreground">Transform Your Musical Journey</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6 mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Want to know more
                <br />
                about <span className="text-music-orange">MuSoclef</span>?
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Book a free demo and learn more about our music courses, 
                expert instructors, and personalized learning paths. We would love to 
                help you start your musical adventure.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="group px-8 py-4 text-lg font-semibold hover-scale"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book a Demo
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-music-purple text-music-purple hover:bg-music-purple hover:text-white px-8 py-4 text-lg font-semibold hover-scale"
              >
                Start Free Trial
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-music-green rounded-full"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-music-yellow rounded-full"></div>
                  <span>7-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-music-pink rounded-full"></div>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;