'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

// Blog posts data - will be replaced with CMS/MDX later
const blogPosts: BlogPost[] = [
  {
    slug: 'runners-knee-patellofemoral-pain',
    title: 'Runner\'s Knee: Why Your Kneecap Hurts and How to Fix It',
    excerpt: 'That aching pain around or behind your kneecap is likely patellofemoral pain syndrome. Here\'s what causes it and how to run pain-free again.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Knees',
    readTime: '7 min read'
  },
  {
    slug: 'golfers-elbow-medial-epicondylitis',
    title: 'Golfer\'s Elbow: Causes, Treatment, and Exercises That Work',
    excerpt: 'Pain on the inside of your elbow? Golfer\'s elbow affects more than just golfers. Here\'s how to heal it and prevent it from coming back.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Arms',
    readTime: '7 min read'
  },
  {
    slug: 'how-to-improve-flexibility',
    title: 'How to Actually Improve Flexibility: The Science-Based Guide',
    excerpt: 'Stretching every day but not getting more flexible? You might be doing it wrong. Here\'s what the research says actually works.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Mobility',
    readTime: '8 min read'
  },
  {
    slug: 'hip-flexor-pain-tight-hip-flexors',
    title: 'Tight Hip Flexors: What Actually Works (And What Doesn\'t)',
    excerpt: 'Everyone blames their hip flexors. But stretching alone rarely fixes the problem. Here\'s what\'s really going on and how to address it.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Hips',
    readTime: '7 min read'
  },
  {
    slug: 'hamstring-strain-recovery',
    title: 'Hamstring Strain: How to Recover Faster and Prevent Re-Injury',
    excerpt: 'Pulled your hamstring? Here\'s the evidence-based approach to getting back to full activity without re-tearing it.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Legs',
    readTime: '7 min read'
  },
  {
    slug: 'shoulder-impingement-exercises',
    title: 'Shoulder Impingement: Why It Happens and How to Fix It',
    excerpt: 'Pain when raising your arm overhead? Shoulder impingement is common but treatable. Here\'s the complete guide to recovery.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Shoulders',
    readTime: '7 min read'
  },
  {
    slug: 'lower-back-pain-exercises',
    title: 'Lower Back Pain: The Best Exercises for Relief and Prevention',
    excerpt: '80% of adults experience low back pain. Here are the exercises that actually help—and the ones that make it worse.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Back',
    readTime: '8 min read'
  },
  {
    slug: 'neck-pain-exercises-relief',
    title: 'Neck Pain: Exercises and Stretches That Actually Work',
    excerpt: 'Stiff neck? Tension headaches? Here\'s how to relieve neck pain and prevent it from coming back.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Neck',
    readTime: '7 min read'
  },
  {
    slug: 'core-exercises-back-pain',
    title: 'Core Exercises for Back Pain: Build Stability Without Making It Worse',
    excerpt: 'A strong core protects your back—but the wrong exercises can hurt it. Here\'s how to build core stability safely.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Core',
    readTime: '7 min read'
  },
  {
    slug: 'plantar-fasciitis-treatment-exercises',
    title: 'Plantar Fasciitis: Why Your Heel Hurts and How to Fix It',
    excerpt: 'That stabbing pain in your heel every morning? It\'s probably plantar fasciitis—and it\'s fixable. Here\'s what actually works.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Feet',
    readTime: '7 min read'
  },
  {
    slug: 'carpal-tunnel-syndrome-exercises',
    title: 'Carpal Tunnel Syndrome: Symptoms, Causes, and Treatment Without Surgery',
    excerpt: 'Numbness and tingling in your hands? Carpal tunnel is common but often misunderstood. Here\'s what helps—and what doesn\'t.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Arms',
    readTime: '7 min read'
  },
  {
    slug: 'it-band-syndrome-runners-knee',
    title: 'IT Band Syndrome: Why Your Knee Hurts and How to Fix It',
    excerpt: 'That pain on the outside of your knee is likely IT band syndrome—the second most common running injury. Here\'s how to beat it.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Legs',
    readTime: '7 min read'
  },
  {
    slug: 'tennis-elbow-lateral-epicondylitis',
    title: 'Tennis Elbow: Why It Happens and How to Actually Fix It',
    excerpt: 'You don\'t need to play tennis to get tennis elbow. Here\'s what causes this stubborn condition and the exercises that actually help.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Arms',
    readTime: '7 min read'
  },
  {
    slug: 'achilles-tendonitis-treatment',
    title: 'Achilles Tendonitis: The Complete Recovery Guide',
    excerpt: 'That nagging pain in your Achilles won\'t go away on its own. Here\'s the evidence-based approach to healing and preventing recurrence.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Legs',
    readTime: '8 min read'
  },
  {
    slug: 'rotator-cuff-pain-exercises',
    title: 'Rotator Cuff Pain: Causes, Exercises, and When You Need Help',
    excerpt: 'Shoulder pain keeping you up at night? Your rotator cuff might be to blame. Here\'s how to identify the problem and what actually helps.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Shoulders',
    readTime: '8 min read'
  },
  {
    slug: 'sciatica-causes-treatment-exercises',
    title: 'Sciatica: What Causes It and How to Get Real Relief',
    excerpt: 'That shooting pain down your leg? It\'s probably sciatica—and it\'s usually treatable without surgery. Here\'s what actually works.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Back',
    readTime: '8 min read'
  },
  {
    slug: 'foam-rolling-guide-benefits',
    title: 'Foam Rolling: Does It Work and How to Do It Right',
    excerpt: 'Everyone owns a foam roller but few use it correctly. Here\'s what the science says about foam rolling and how to actually benefit from it.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '7 min read'
  },
  {
    slug: 'shin-splints-causes-treatment',
    title: 'Shin Splints: Why They Happen and How to Fix Them',
    excerpt: 'That aching pain along your shinbone is one of the most common running injuries. Here\'s why it happens and how to get back to running pain-free.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Legs',
    readTime: '7 min read'
  },
  {
    slug: 'rest-days-exercise-recovery',
    title: 'Rest Days: How Many You Need and What to Do on Them',
    excerpt: 'Should you exercise every day? Take complete rest? Active recovery? Here\'s what the science says about optimal recovery between workouts.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '7 min read'
  },
  {
    slug: 'heat-vs-ice-when-to-use',
    title: 'Heat vs Ice: When to Use Each for Pain and Injury',
    excerpt: 'Should you ice it or heat it? The answer depends on what\'s wrong, when it happened, and what you\'re trying to achieve. Here\'s the definitive guide.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '6 min read'
  },
  {
    slug: 'numbness-tingling-causes-when-worry',
    title: 'Numbness and Tingling: What Causes It and When to Worry',
    excerpt: 'Pins and needles, numbness, burning sensations—when is it harmless, and when does it need attention? Here\'s how to tell the difference.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'tight-calves-causes-relief',
    title: 'Tight Calves: Why They Happen and How to Get Lasting Relief',
    excerpt: 'Constantly stretching your calves but they\'re still tight? The problem might not be what you think. Here\'s what actually works.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Legs',
    readTime: '6 min read'
  },
  {
    slug: 'breathing-exercises-health-benefits',
    title: 'Breathing Exercises: How They Work and Which Ones Actually Help',
    excerpt: 'Breathwork is everywhere now. But does it actually do anything? Here\'s the science behind breathing exercises and which techniques are worth your time.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '7 min read'
  },
  {
    slug: 'walking-for-health-how-much',
    title: 'How Much Walking Do You Actually Need? The Evidence-Based Answer',
    excerpt: 'Is 10,000 steps necessary? Can walking replace the gym? Here\'s what research actually shows about walking for health, weight, and longevity.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Lifestyle',
    readTime: '7 min read'
  },
  {
    slug: 'hip-pain-sleeping-side-relief',
    title: 'Hip Pain When Sleeping on Your Side: Causes and Solutions',
    excerpt: 'Waking up with hip pain? Side sleeping puts pressure on your hips—but you don\'t have to give it up. Here\'s how to sleep pain-free.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Hips',
    readTime: '7 min read'
  },
  {
    slug: 'balance-training-importance-exercises',
    title: 'Balance Training: Why It Matters and How to Improve It',
    excerpt: 'Balance isn\'t just for athletes and seniors. It affects injury risk, performance, and daily function. Here\'s how to build it at any age.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Functional',
    readTime: '7 min read'
  },
  {
    slug: 'shoulder-blade-pain-causes-relief',
    title: 'Pain Between Your Shoulder Blades: Causes and How to Fix It',
    excerpt: 'That nagging ache between your shoulder blades won\'t go away. Here\'s what\'s actually causing it and the exercises that provide lasting relief.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Back',
    readTime: '7 min read'
  },
  {
    slug: 'joint-cracking-popping-safe',
    title: 'Is Cracking Your Joints Bad? What Science Actually Says',
    excerpt: 'Knuckle cracking, back popping, neck clicking—is it harmful or harmless? The research might surprise you.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'stretching-before-after-exercise',
    title: 'Should You Stretch Before or After Exercise? The Science-Based Answer',
    excerpt: 'The stretching debate is over. Here\'s what research actually shows about when, how, and whether to stretch for performance and recovery.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Flexibility',
    readTime: '7 min read'
  },
  {
    slug: 'knee-pain-stairs-causes-fixes',
    title: 'Knee Pain Going Up or Down Stairs: Causes and Solutions',
    excerpt: 'Stairs are the ultimate knee test. If yours hurt climbing or descending, here\'s what\'s likely causing it and how to fix it.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Knees',
    readTime: '7 min read'
  },
  {
    slug: 'how-to-fix-posture-guide',
    title: 'How to Fix Your Posture: The Complete Evidence-Based Guide',
    excerpt: 'Slouching, rounded shoulders, forward head? Posture can change—but not with the methods most people try. Here\'s what actually works.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Posture',
    readTime: '9 min read'
  },
  {
    slug: 'sitting-too-long-health-risks',
    title: 'How Much Sitting Is Too Much? The Truth About Sedentary Health',
    excerpt: 'You\'ve heard sitting is the new smoking. But how much is actually harmful, and what can you do if your job requires a desk? Here\'s the research.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Lifestyle',
    readTime: '8 min read'
  },
  {
    slug: 'doms-muscle-soreness-recovery',
    title: 'DOMS: Why You\'re Sore After Workouts and What Actually Helps',
    excerpt: 'That delayed muscle soreness after a tough workout? It\'s DOMS—and most recovery advice is wrong. Here\'s what the science actually shows.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '7 min read'
  },
  {
    slug: 'text-neck-tech-neck-fix',
    title: 'Text Neck: The Modern Epidemic and How to Fix It',
    excerpt: 'Spending hours looking down at your phone? Text neck causes pain, headaches, and postural changes. Here\'s how to reverse the damage.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Neck',
    readTime: '7 min read'
  },
  {
    slug: 'age-related-stiffness-mobility',
    title: 'Why We Get Stiffer With Age (And What to Do About It)',
    excerpt: 'Feeling stiffer every year? It\'s not inevitable. Here\'s why aging affects flexibility and the evidence-based strategies to stay mobile for life.',
    date: '2026-03-03',
    author: 'Foundational Rehab',
    category: 'Mobility',
    readTime: '8 min read'
  },
  {
    slug: 'when-to-see-doctor-pain',
    title: 'When to See a Doctor for Pain: Red Flags You Shouldn\'t Ignore',
    excerpt: 'Most pain responds to self-care—but some symptoms need professional attention. Know the red flags that warrant evaluation.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'foam-rolling-complete-guide',
    title: 'Foam Rolling: The Complete Guide to Self-Myofascial Release',
    excerpt: 'Everyone foam rolls—but most do it wrong. Here\'s what the science actually says and how to do it effectively.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '8 min read'
  },
  {
    slug: 'tension-headaches-neck-pain-relief',
    title: 'Tension Headaches and Neck Pain: Breaking the Cycle',
    excerpt: 'Constant headaches and a stiff neck? They\'re connected—and fixable. Here\'s how to break the cycle for good.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Neck',
    readTime: '7 min read'
  },
  {
    slug: 'si-joint-pain-treatment',
    title: 'SI Joint Pain: Causes, Symptoms, and Effective Treatment',
    excerpt: 'Low back pain that won\'t go away? Your SI joint might be the hidden cause. Here\'s how to identify and fix it.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Back',
    readTime: '7 min read'
  },
  {
    slug: 'groin-pain-adductor-strain',
    title: 'Groin Pain and Adductor Strains: Recovery and Prevention',
    excerpt: 'Groin pull got you sidelined? These injuries linger if mismanaged. Here\'s the evidence-based approach to full recovery.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Hips',
    readTime: '7 min read'
  },
  {
    slug: 'runners-knee-patellofemoral-pain',
    title: 'Runner\'s Knee: Why It Happens and How to Fix It',
    excerpt: 'Front knee pain ruining your runs? Runner\'s knee is the #1 running injury—and it\'s usually a hip problem in disguise.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Running',
    readTime: '8 min read'
  },
  {
    slug: 'wrist-pain-carpal-tunnel-relief',
    title: 'Wrist Pain and Carpal Tunnel: Causes, Relief, and Prevention',
    excerpt: 'Wrist pain, numbness, tingling? From carpal tunnel to tendinitis, here\'s how to find relief and prevent it from coming back.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Arms',
    readTime: '7 min read'
  },
  {
    slug: 'achilles-tendinopathy-treatment',
    title: 'Achilles Tendinopathy: The Evidence-Based Recovery Guide',
    excerpt: 'Achilles pain that won\'t quit? Rest isn\'t the answer—loading is. Here\'s the evidence-based protocol that actually works.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Running',
    readTime: '8 min read'
  },
  {
    slug: 'shin-splints-treatment-prevention',
    title: 'Shin Splints: Why They Happen and How to Fix Them for Good',
    excerpt: 'That burning shin pain ruining your runs? Shin splints are fixable—but most runners handle them wrong. Here\'s the complete recovery guide.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Running',
    readTime: '7 min read'
  },
  {
    slug: 'piriformis-syndrome-treatment',
    title: 'Piriformis Syndrome: The Hidden Cause of Buttock and Leg Pain',
    excerpt: 'Pain radiating from your buttock down your leg? It might not be sciatica. Piriformis syndrome mimics it perfectly—but is far more treatable.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Hips',
    readTime: '7 min read'
  },
  {
    slug: 'core-stability-back-pain',
    title: 'Core Stability for Back Pain: What Actually Works',
    excerpt: 'Everyone says strengthen your core. But crunches and planks aren\'t cutting it. Here\'s what the research actually shows works for back pain.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Back',
    readTime: '8 min read'
  },
  {
    slug: 'tennis-elbow-golfers-elbow-treatment',
    title: 'Tennis Elbow & Golfer\'s Elbow: The Complete Recovery Guide',
    excerpt: 'Elbow pain that won\'t quit? Tennis and golfer\'s elbow are tendon problems—and rest alone won\'t fix them. Here\'s what works.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Arms',
    readTime: '8 min read'
  },
  {
    slug: 'tight-hamstrings-causes-fixes',
    title: 'Tight Hamstrings: Why Stretching Isn\'t Working',
    excerpt: 'Stretching every day but still tight? The problem isn\'t your hamstrings—it\'s your approach. Here\'s what actually works.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Flexibility',
    readTime: '7 min read'
  },
  {
    slug: 'thoracic-spine-mobility',
    title: 'Thoracic Spine Mobility: Unlock Your Upper Back',
    excerpt: 'Stiff upper back causing neck pain, shoulder issues, or headaches? Your thoracic spine is the hidden culprit—here\'s how to unlock it.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Mobility',
    readTime: '7 min read'
  },
  {
    slug: 'hip-flexor-pain-relief',
    title: 'Hip Flexor Pain: Why It Happens and How to Fix It',
    excerpt: 'That tight, achy feeling in the front of your hip? Desk work is the culprit. Learn why stretching alone won\'t fix it—and what actually will.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Hips',
    readTime: '8 min read'
  },
  {
    slug: 'it-band-syndrome-treatment',
    title: 'IT Band Syndrome: Why Foam Rolling Isn\'t Enough',
    excerpt: 'Outer knee pain from running or cycling? IT band syndrome is common—but most treatment approaches miss the real cause. Here\'s what actually works.',
    date: '2026-02-27',
    author: 'Foundational Rehab',
    category: 'Running',
    readTime: '7 min read'
  },
  {
    slug: 'ankle-mobility-exercises',
    title: 'Ankle Mobility: The Missing Link in Your Movement',
    excerpt: 'Stiff ankles cause problems everywhere—knees, hips, back. Learn why ankle mobility matters and the best exercises to improve it fast.',
    date: '2026-02-27',
    author: 'Foundational Rehab',
    category: 'Mobility',
    readTime: '6 min read'
  },
  {
    slug: 'neck-pain-relief-exercises',
    title: 'Neck Pain Relief: Exercises That Actually Work',
    excerpt: 'Stiff neck, tension headaches, and upper back tightness? Most neck pain comes from how we live—and responds well to the right exercises.',
    date: '2026-02-27',
    author: 'Foundational Rehab',
    category: 'Neck',
    readTime: '7 min read'
  },
  {
    slug: 'plantar-fasciitis-recovery',
    title: 'Plantar Fasciitis: Why Your Heel Hurts and How to Fix It',
    excerpt: 'That stabbing heel pain in the morning? Plantar fasciitis affects 1 in 10 people. Learn what actually works for recovery—and what\'s a waste of time.',
    date: '2026-02-27',
    author: 'Foundational Rehab',
    category: 'Feet',
    readTime: '7 min read'
  },
  {
    slug: 'knee-pain-squatting-fix',
    title: 'Knee Pain When Squatting: Causes, Fixes, and When to Worry',
    excerpt: 'Front knee pain during squats is frustrating but usually fixable. Learn what\'s actually causing it, which exercises help, and how to squat pain-free again.',
    date: '2026-02-27',
    author: 'Foundational Rehab',
    category: 'Knees',
    readTime: '8 min read'
  },
  {
    slug: 'sciatica-exercises-relief',
    title: 'Sciatica Exercises: Evidence-Based Moves for Lasting Relief',
    excerpt: 'Sciatica pain shooting down your leg? Learn which exercises actually help (and which make it worse), plus a progressive program for long-term relief.',
    date: '2026-02-26',
    author: 'Foundational Rehab',
    category: 'Exercise',
    readTime: '9 min read'
  },
  {
    slug: 'shoulder-pain-rotator-cuff',
    title: 'Shoulder Pain and Rotator Cuff: A Complete Guide to Recovery',
    excerpt: 'From diagnosis to full recovery—everything you need to know about rotator cuff issues, including exercises that actually work and timelines to expect.',
    date: '2026-02-26',
    author: 'Foundational Rehab',
    category: 'Shoulders',
    readTime: '10 min read'
  },
  {
    slug: 'desk-posture-pain-relief',
    title: 'Desk Posture: How to Fix Pain From Sitting All Day',
    excerpt: 'Neck tension, upper back pain, and stiff hips from desk work? Here\'s the science of why sitting hurts and practical fixes you can do at your desk.',
    date: '2026-02-26',
    author: 'Foundational Rehab',
    category: 'Posture',
    readTime: '7 min read'
  },
  {
    slug: 'understanding-low-back-pain',
    title: 'Understanding Low Back Pain: Causes, Myths, and Modern Treatment',
    excerpt: 'Low back pain affects 80% of people at some point in their lives. Learn what actually causes it, debunk common myths, and discover evidence-based approaches to relief.',
    date: '2026-02-25',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '8 min read'
  },
  {
    slug: 'movement-is-medicine',
    title: 'Movement Is Medicine: Why Rest Isn\'t Always Best',
    excerpt: 'The old advice to "rest until the pain goes away" is outdated. Research shows that appropriate movement is one of the most effective treatments for musculoskeletal pain.',
    date: '2026-02-24',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '6 min read'
  },
  {
    slug: 'building-hip-mobility',
    title: 'Building Hip Mobility: The Foundation of Pain-Free Movement',
    excerpt: 'Your hips are the engine of your body. When they\'re tight or weak, problems cascade up to your back and down to your knees. Here\'s how to restore healthy hip function.',
    date: '2026-02-23',
    author: 'Foundational Rehab',
    category: 'Mobility',
    readTime: '7 min read'
  },
  {
    slug: 'frozen-shoulder-adhesive-capsulitis',
    title: 'Frozen Shoulder: Causes, Stages, and Evidence-Based Treatment',
    excerpt: 'Can\'t lift your arm without searing pain? Frozen shoulder is one of the most frustrating conditions—but it\'s treatable with the right approach and timeline expectations.',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Shoulder',
    readTime: '8 min read'
  },
  {
    slug: 'hip-bursitis-trochanteric-pain',
    title: 'Hip Bursitis: Why Your Outer Hip Hurts and How to Fix It',
    excerpt: 'Pain on the outside of your hip that flares when lying on that side or climbing stairs? It\'s probably not bursitis—and that changes everything about treatment.',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Hips',
    readTime: '7 min read'
  },
  {
    slug: 'tmj-jaw-pain-treatment',
    title: 'TMJ Pain: Causes, Symptoms, and Effective Treatment',
    excerpt: 'Jaw clicking, pain when chewing, headaches? TMJ disorders are surprisingly common—and often fixable with the right approach.',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Head & Neck',
    readTime: '7 min read'
  },
  {
    slug: 'forward-head-posture-fix',
    title: 'Forward Head Posture: Why Your Head Position Causes Pain (And How to Fix It)',
    excerpt: 'That forward head position from screens isn\'t just unattractive—it\'s causing your neck pain, headaches, and shoulder tension. Here\'s the fix.',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Posture',
    readTime: '7 min read'
  },
  {
    slug: 'muscle-cramps-causes-prevention',
    title: 'Muscle Cramps: Why They Happen and How to Stop Them',
    excerpt: 'That sudden, excruciating charley horse waking you at 3am? Muscle cramps have multiple causes—and the fix isn\'t always what you think.',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '6 min read'
  },
  {
    slug: 'morning-stiffness-causes-relief',
    title: 'Morning Stiffness: Why You Wake Up Tight and How to Fix It',
    excerpt: 'Feeling like the Tin Man every morning? That stiffness has real causes—and solutions that go beyond just "getting older."',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '6 min read'
  },
  {
    slug: 'stretching-mistakes-flexibility',
    title: '7 Stretching Mistakes That Are Wasting Your Time (Or Making Things Worse)',
    excerpt: 'You stretch regularly but aren\'t getting more flexible? You might be making these common mistakes that sabotage your results.',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'how-long-pain-heal-recovery-timeline',
    title: 'How Long Does Pain Take to Heal? Understanding Recovery Timelines',
    excerpt: 'Will this pain ever go away? Here\'s what science says about how long different injuries actually take to heal—and why yours might be taking longer.',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '8 min read'
  },
  {
    slug: 'anterior-pelvic-tilt-fix',
    title: 'Anterior Pelvic Tilt: Why Your Pelvis Position Causes Back Pain (And How to Fix It)',
    excerpt: 'That exaggerated low back curve and protruding belly? It\'s often anterior pelvic tilt—a fixable posture problem that causes real pain.',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Posture',
    readTime: '7 min read'
  },
  {
    slug: 'exercise-for-beginners-starting-guide',
    title: 'Starting Exercise When You\'re Out of Shape: A Realistic Guide',
    excerpt: 'Want to start exercising but don\'t know where to begin? Here\'s the no-judgment guide to building a sustainable routine from zero.',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Getting Started',
    readTime: '8 min read'
  },
  {
    slug: 'herniated-disc-bulging-disc-guide',
    title: 'Herniated Disc vs Bulging Disc: What\'s the Difference and Will It Heal?',
    excerpt: 'Got a scary MRI result? Here\'s what herniated and bulging discs actually mean, why they\'re often not as bad as they sound, and what to do about them.',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Back',
    readTime: '8 min read'
  },
  {
    slug: 'best-sleeping-positions-back-neck-pain',
    title: 'Best Sleeping Positions for Back and Neck Pain',
    excerpt: 'Waking up in pain? Your sleep position might be the culprit. Here\'s how to set up for pain-free nights and better mornings.',
    date: '2026-03-01',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '6 min read'
  },
  {
    slug: 'back-spasms-causes-treatment',
    title: 'Back Spasms: Why Your Back Locks Up and How to Get Relief',
    excerpt: 'That sudden, intense muscle seizing that stops you in your tracks? Back spasms are terrifying—but usually not serious. Here\'s what to do.',
    date: '2026-03-02',
    author: 'Foundational Rehab',
    category: 'Back',
    readTime: '7 min read'
  },
  {
    slug: 'rib-pain-costochondritis-treatment',
    title: 'Rib Pain and Costochondritis: Causes, Symptoms, and Relief',
    excerpt: 'Sharp chest pain that makes you worry about your heart? Costochondritis and rib issues are surprisingly common—and treatable.',
    date: '2026-03-02',
    author: 'Foundational Rehab',
    category: 'Chest',
    readTime: '7 min read'
  },
  {
    slug: 'arthritis-pain-exercise-management',
    title: 'Arthritis Pain: Why Exercise Helps More Than Rest',
    excerpt: 'Diagnosed with arthritis and told to "take it easy"? That advice is outdated. Movement is medicine—here\'s the evidence-based approach.',
    date: '2026-03-02',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '8 min read'
  },
  {
    slug: 'stress-pain-connection',
    title: 'The Stress-Pain Connection: Why Your Mind Affects Your Body',
    excerpt: 'Your pain is real—but stress can make it worse, or even cause it. Understanding this connection is key to lasting relief.',
    date: '2026-03-02',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'spinal-stenosis-treatment-exercises',
    title: 'Spinal Stenosis: Understanding Your Narrowed Spine and Finding Relief',
    excerpt: 'Told your spinal canal is narrowing? Stenosis sounds scary, but many people manage well without surgery. Here\'s what actually helps.',
    date: '2026-03-02',
    author: 'Foundational Rehab',
    category: 'Back',
    readTime: '8 min read'
  },
  {
    slug: 'nerve-pain-neuropathy-relief',
    title: 'Nerve Pain: Why It Feels Different and How to Manage It',
    excerpt: 'Burning, tingling, electric shocks? Nerve pain doesn\'t respond to typical treatments. Here\'s what\'s happening and what actually works.',
    date: '2026-03-02',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '8 min read'
  },
  {
    slug: 'hip-impingement-fai-treatment',
    title: 'Hip Impingement (FAI): Causes, Symptoms, and Conservative Treatment',
    excerpt: 'Pinching pain deep in your hip with movement? Hip impingement is common in active people—and often manageable without surgery.',
    date: '2026-03-02',
    author: 'Foundational Rehab',
    category: 'Hips',
    readTime: '8 min read'
  },
  {
    slug: 'degenerative-disc-disease-treatment',
    title: 'Degenerative Disc Disease: Why the Name Is Scarier Than the Condition',
    excerpt: 'Told you have degenerative disc disease? Despite the scary name, it\'s normal aging—not a progressive disease. Here\'s what it really means.',
    date: '2026-03-02',
    author: 'Foundational Rehab',
    category: 'Back',
    readTime: '7 min read'
  },
  {
    slug: 'trigger-points-muscle-knots-relief',
    title: 'Trigger Points and Muscle Knots: What They Are and How to Release Them',
    excerpt: 'Those painful spots that radiate pain when pressed? Trigger points are real—and treatable. Here\'s the evidence-based approach.',
    date: '2026-03-02',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '7 min read'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-yellow-400">
            Foundational Rehab
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-400 hover:text-white transition">
              Home
            </Link>
            <Link href="/blog" className="text-white font-medium">
              Articles
            </Link>
            <Link href="/app" className="text-gray-400 hover:text-white transition">
              App
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Recovery <span className="text-yellow-400">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Evidence-based guidance for pain relief, mobility, and building a body that moves well.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-yellow-400 font-medium flex items-center gap-2">
                    Read more 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Start Your Recovery?</h2>
          <p className="text-gray-400 mb-6">
            Get personalized rehab programs powered by AI guidance and evidence-based protocols.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
          >
            Try the App Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          © 2026 Foundational Rehab. Evidence-based recovery guidance.
        </div>
      </footer>
    </div>
  );
}
