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
    slug: 'balance-exercises-seniors-fall-prevention',
    title: 'Balance Exercises for Seniors: Prevent Falls and Stay Independent',
    excerpt: 'Falls are the leading cause of injury for older adults. These balance exercises can reduce your risk and keep you moving confidently.',
    date: '2026-03-07',
    author: 'Foundational Rehab',
    category: 'Exercise',
    readTime: '6 min read'
  },
  {
    slug: 'full-body-stretching-routine-flexibility',
    title: 'Full Body Stretching Routine: 15-Minute Flexibility Program',
    excerpt: 'A simple daily stretching routine that covers every major muscle group. Perfect for morning or post-workout.',
    date: '2026-03-07',
    author: 'Foundational Rehab',
    category: 'Exercise',
    readTime: '6 min read'
  },
  {
    slug: 'walking-program-beginners-guide',
    title: 'Walking Program for Beginners: How to Start Moving Safely',
    excerpt: 'Walking is the simplest way to improve your health. Here\'s a week-by-week program to build up safely.',
    date: '2026-03-07',
    author: 'Foundational Rehab',
    category: 'Exercise',
    readTime: '5 min read'
  },
  {
    slug: 'core-exercises-back-pain-stability',
    title: 'Core Exercises for Back Pain: Build Stability and Reduce Pain',
    excerpt: 'A weak core often contributes to back pain. These exercises build deep stability to protect your spine.',
    date: '2026-03-07',
    author: 'Foundational Rehab',
    category: 'Back Pain',
    readTime: '6 min read'
  },
  {
    slug: 'understanding-mri-xray-results',
    title: 'Understanding Your MRI or X-Ray Results: What Those Findings Actually Mean',
    excerpt: 'Got scary-sounding imaging results? Many "abnormal" findings are normal. Here\'s how to understand what matters.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'do-i-need-surgery-decision-guide',
    title: 'Do I Need Surgery? How to Know When It\'s Necessary and When to Wait',
    excerpt: 'Surgery is sometimes needed, but not as often as you might think. Here\'s how to make an informed decision.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'reduce-inflammation-naturally',
    title: 'How to Reduce Inflammation Naturally: Diet, Exercise, and Lifestyle',
    excerpt: 'Chronic inflammation contributes to pain and disease. Here\'s what actually helps reduce it naturally.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'weight-loss-joint-pain-relief',
    title: 'Weight Loss and Joint Pain: How Losing Weight Helps Your Joints',
    excerpt: 'Extra weight means extra stress on your joints. Here\'s the science and practical advice for relief.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'should-you-exercise-when-sore',
    title: 'Should You Exercise When Sore? When to Push Through and When to Rest',
    excerpt: 'Muscle soreness after a workout is normal. But should you train anyway? Here\'s how to decide.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'prevent-injury-starting-exercise',
    title: 'How to Prevent Injury When Starting to Exercise: A Beginner\'s Guide',
    excerpt: 'New to exercise? Avoid the common mistakes that lead to injury. Here\'s how to start safely.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'self-massage-tennis-ball-techniques',
    title: 'Self-Massage with a Tennis Ball: Target Tight Muscles at Home',
    excerpt: 'No massage therapist needed. Here\'s how to release tight muscles with just a tennis ball or lacrosse ball.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'resistance-bands-rehab-exercises',
    title: 'Resistance Bands for Rehab: Exercises for Every Body Part',
    excerpt: 'Resistance bands are perfect for rehab. Portable, affordable, and versatile. Here\'s how to use them effectively.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'do-massage-guns-work',
    title: 'Do Massage Guns Work? The Evidence and How to Use Them',
    excerpt: 'Massage guns are everywhere. But do they actually help? Here\'s what the research says and how to use one properly.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'pt-vs-orthopedist-vs-chiropractor',
    title: 'PT vs Orthopedist vs Chiropractor: Who Should You See for Pain?',
    excerpt: 'Not sure which provider to see for your pain? Here\'s what each type does and when to choose them.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'best-sleeping-positions-back-pain',
    title: 'Best Sleeping Positions for Back Pain: How to Wake Up Without Stiffness',
    excerpt: 'Waking up stiff and sore? Your sleep position might be the problem. Here\'s how to sleep better for your back.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'desk-ergonomics-pain-prevention',
    title: 'Desk Ergonomics: How to Set Up Your Workspace to Prevent Pain',
    excerpt: 'Spending hours at a desk? Proper setup prevents neck, back, and wrist pain. Here\'s your complete ergonomic guide.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'how-to-sit-properly-posture',
    title: 'How to Sit Properly: The Complete Guide to Good Sitting Posture',
    excerpt: 'Sitting isn\'t bad—sitting poorly is. Here\'s how to sit in a way that protects your spine and reduces pain.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'desk-exercises-office-stretches',
    title: 'Desk Exercises: 10 Stretches and Movements You Can Do at Your Desk',
    excerpt: 'No time for the gym? These exercises take minutes and can be done right at your workspace.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'ice-vs-heat-when-to-use',
    title: 'Ice vs Heat: When to Use Each for Pain and Injury',
    excerpt: 'Should you reach for the ice pack or heating pad? Here\'s the definitive guide to when each works best.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'what-to-expect-physical-therapy',
    title: 'What to Expect at Physical Therapy: Your First Visit Guide',
    excerpt: 'Never been to PT before? Here\'s exactly what happens during your first visit and what to bring.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'how-long-physical-therapy-take',
    title: 'How Long Does Physical Therapy Take? Timeline Expectations by Condition',
    excerpt: 'Wondering how many PT sessions you\'ll need? Here\'s what affects duration and typical timelines.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'does-physical-therapy-hurt',
    title: 'Does Physical Therapy Hurt? What to Expect and When Pain Is Normal',
    excerpt: 'Worried PT will be painful? Here\'s the truth about discomfort during rehab and when to speak up.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'exercise-during-pregnancy-guide',
    title: 'Exercise During Pregnancy: What\'s Safe, What to Avoid, and Why It Matters',
    excerpt: 'Staying active during pregnancy is good for you and baby. Here\'s what you need to know about exercising safely.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'exercise-high-blood-pressure',
    title: 'Exercise and High Blood Pressure: The Complete Guide to Working Out Safely',
    excerpt: 'Have hypertension? Exercise helps lower blood pressure, but there are things to know. Here\'s how to do it right.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'exercise-with-diabetes-guide',
    title: 'Exercise With Diabetes: How to Work Out Safely and Improve Blood Sugar Control',
    excerpt: 'Exercise is powerful medicine for diabetes. Here\'s how to do it safely and get the most benefit.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'cardiac-rehab-exercise-after-heart-attack',
    title: 'Exercise After a Heart Attack: Cardiac Rehab and Returning to an Active Life',
    excerpt: 'Had a heart event? Exercise is essential for recovery. Here\'s how cardiac rehab works and how to exercise safely.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '7 min read'
  },
  {
    slug: 'mcl-sprain-treatment-recovery',
    title: 'MCL Sprain: Grades, Treatment, and Return to Activity',
    excerpt: 'Injured the inside of your knee? MCL sprains are common and usually heal well without surgery. Here\'s what to expect.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '6 min read'
  },
  {
    slug: 'bakers-cyst-treatment',
    title: 'Baker\'s Cyst: What That Lump Behind Your Knee Really Is',
    excerpt: 'Noticed swelling behind your knee? A Baker\'s cyst is usually a sign of something else going on. Here\'s what to know.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '5 min read'
  },
  {
    slug: 'pes-anserine-bursitis-treatment',
    title: 'Pes Anserine Bursitis: The Common Cause of Inner Knee Pain',
    excerpt: 'Pain on the inside of your knee, below the joint line? Pes anserine bursitis might be the culprit. Here\'s how to treat it.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Pain',
    readTime: '5 min read'
  },
  {
    slug: 'exertional-compartment-syndrome',
    title: 'Chronic Exertional Compartment Syndrome: When Running Makes Your Legs Feel Like They\'ll Explode',
    excerpt: 'Severe leg tightness and pain during exercise that goes away with rest? CECS is often misdiagnosed. Here\'s what it is.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '6 min read'
  },
  {
    slug: 'snapping-hip-syndrome-treatment',
    title: 'Snapping Hip Syndrome: Why Your Hip Pops and What to Do About It',
    excerpt: 'Hip clicking or popping with movement? Snapping hip is common in dancers and athletes. Here\'s what causes it and when it needs treatment.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '6 min read'
  },
  {
    slug: 'ankle-impingement-treatment',
    title: 'Ankle Impingement: Why Your Ankle Pinches and How to Fix It',
    excerpt: 'Pain at the front or back of your ankle with deep squats or pointing your toes? Ankle impingement might be the cause.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '6 min read'
  },
  {
    slug: 'biceps-tendonitis-shoulder-treatment',
    title: 'Biceps Tendonitis: Why the Front of Your Shoulder Hurts',
    excerpt: 'Pain at the front of your shoulder that worsens with lifting? Your biceps tendon might be the problem. Here\'s how to fix it.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '6 min read'
  },
  {
    slug: 'quadriceps-tendonitis-treatment',
    title: 'Quadriceps Tendonitis: Pain Above the Kneecap and How to Treat It',
    excerpt: 'Pain just above your kneecap? Quad tendonitis is the less-famous cousin of jumper\'s knee. Here\'s the evidence-based approach.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '6 min read'
  },
  {
    slug: 'tailbone-pain-coccydynia-treatment',
    title: 'Tailbone Pain: Why Sitting Hurts and How to Find Relief',
    excerpt: 'Can\'t sit without pain? Coccydynia is frustrating but treatable. Here\'s what causes tailbone pain and what actually helps.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Pain',
    readTime: '6 min read'
  },
  {
    slug: 'facet-joint-syndrome-back-pain',
    title: 'Facet Joint Syndrome: The Overlooked Cause of Back and Neck Pain',
    excerpt: 'Back pain that\'s worse with extension and twisting? Your facet joints might be the problem. Here\'s what to do about it.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Pain',
    readTime: '6 min read'
  },
  {
    slug: 'bone-spurs-osteophytes-treatment',
    title: 'Bone Spurs: What They Are, When They Matter, and What to Do About Them',
    excerpt: 'Diagnosed with bone spurs? Don\'t panic. Here\'s when they cause problems and when they\'re just a normal part of aging.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'leg-length-discrepancy-treatment',
    title: 'Leg Length Discrepancy: Does It Matter and What Should You Do?',
    excerpt: 'One leg shorter than the other? Here\'s when it causes problems, when it doesn\'t, and how to address it if needed.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'lordosis-swayback-posture-exercises',
    title: 'Lordosis: Exercises to Fix Swayback Posture and Reduce Lower Back Pain',
    excerpt: 'Standing with an exaggerated curve in your lower back? Here\'s what causes lordosis and the exercises that restore proper alignment.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'concussion-recovery-return-to-activity',
    title: 'Concussion Recovery: Timeline, Symptoms, and Safe Return to Activity',
    excerpt: 'Head injury? Here\'s what to expect during recovery, when to worry, and how to return to sports and daily life safely.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '7 min read'
  },
  {
    slug: 'pelvic-girdle-pain-pregnancy',
    title: 'Pelvic Girdle Pain During Pregnancy: Why It Happens and How to Find Relief',
    excerpt: 'Pain in your pelvis, hips, or pubic bone during pregnancy? PGP is common and manageable. Here\'s what actually helps.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'de-quervains-tenosynovitis-treatment',
    title: 'De Quervain\'s Tenosynovitis: The Painful Thumb Condition and How to Treat It',
    excerpt: 'Sharp pain at your wrist when gripping or turning? De Quervain\'s is common in new parents and desk workers. Here\'s how to fix it.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '6 min read'
  },
  {
    slug: 'cubital-tunnel-syndrome-treatment',
    title: 'Cubital Tunnel Syndrome: Why Your Pinky Goes Numb and How to Fix It',
    excerpt: 'Tingling in your ring and pinky fingers? Cubital tunnel syndrome is the second most common nerve compression. Here\'s what helps.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '6 min read'
  },
  {
    slug: 'cervical-radiculopathy-pinched-nerve-neck',
    title: 'Cervical Radiculopathy: When a Pinched Nerve in Your Neck Causes Arm Pain',
    excerpt: 'Pain, numbness, or weakness shooting down your arm? A pinched nerve in your neck might be the cause. Here\'s what to do.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Pain',
    readTime: '7 min read'
  },
  {
    slug: 'spondylolisthesis-treatment-exercises',
    title: 'Spondylolisthesis: When One Vertebra Slips on Another',
    excerpt: 'Diagnosed with spondylolisthesis? Here\'s what it means, when it\'s serious, and the exercises that help stabilize your spine.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'thoracic-outlet-syndrome-exercises',
    title: 'Thoracic Outlet Syndrome: The Overlooked Cause of Arm Pain and Numbness',
    excerpt: 'Arm symptoms that don\'t fit carpal tunnel or a pinched neck nerve? TOS might be the answer. Here\'s how to identify and treat it.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Pain',
    readTime: '7 min read'
  },
  {
    slug: 'bunion-treatment-exercises',
    title: 'Bunions: Do You Need Surgery? Exercises, Footwear, and Treatment Options',
    excerpt: 'That bony bump on your big toe doesn\'t have to mean surgery. Here\'s what actually helps bunions—and when you do need intervention.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'osgood-schlatter-treatment',
    title: 'Osgood-Schlatter Disease: Why Your Kid\'s Knee Hurts and What to Do About It',
    excerpt: 'Knee pain in your active teen? Osgood-Schlatter is common, treatable, and temporary. Here\'s the parent\'s guide.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'stress-fracture-recovery-guide',
    title: 'Stress Fractures: Signs, Recovery Timeline, and Safe Return to Running',
    excerpt: 'That nagging pain that won\'t go away might be a stress fracture. Here\'s how to know, how to heal, and how to prevent the next one.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '7 min read'
  },
  {
    slug: 'posterior-tibial-tendon-dysfunction',
    title: 'Posterior Tibial Tendon Dysfunction: The Hidden Cause of Adult Flat Feet',
    excerpt: 'Arch collapsing? Ankle rolling in? PTTD is a progressive condition that needs early attention. Here\'s what to do.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '7 min read'
  },
  {
    slug: 'calf-strain-recovery-treatment',
    title: 'Calf Strain: Grades, Recovery Timeline, and Getting Back to Running',
    excerpt: 'Pulled your calf? Here\'s how to know how bad it is and the rehab that gets you running again without re-injury.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '7 min read'
  },
  {
    slug: 'trigger-finger-treatment-exercises',
    title: 'Trigger Finger: Causes, Treatment Options, and Exercises That Help',
    excerpt: 'Finger catching or locking? Trigger finger is common and treatable. Here\'s what works.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '6 min read'
  },
  {
    slug: 'mortons-neuroma-treatment',
    title: 'Morton\'s Neuroma: Why Your Foot Burns and How to Fix It',
    excerpt: 'Burning pain between your toes? Morton\'s neuroma is the likely culprit. Here\'s what causes it and what actually helps.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Pain',
    readTime: '6 min read'
  },
  {
    slug: 'whiplash-recovery-exercises',
    title: 'Whiplash: Recovery Timeline, Exercises, and When to Worry',
    excerpt: 'Neck pain after a car accident or impact? Here\'s what whiplash actually is and how to recover properly.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '7 min read'
  },
  {
    slug: 'knee-replacement-recovery-guide',
    title: 'Knee Replacement Recovery: Timeline, Exercises, and What to Expect',
    excerpt: 'Getting a knee replacement? Here\'s the complete recovery timeline and the exercises that get you walking normally again.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '8 min read'
  },
  {
    slug: 'hip-replacement-recovery-guide',
    title: 'Hip Replacement Recovery: Week by Week Guide to Getting Back on Your Feet',
    excerpt: 'Hip replacement surgery is life-changing. Here\'s what to expect during recovery and how to maximize your outcome.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '8 min read'
  },
  {
    slug: 'jumpers-knee-patellar-tendonitis',
    title: 'Jumper\'s Knee: Why It Happens, How to Treat It, and Getting Back to Sports',
    excerpt: 'Knee pain below the kneecap? Patellar tendonitis is stubborn but treatable. Here\'s the evidence-based approach.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Sports',
    readTime: '7 min read'
  },
  {
    slug: 'ankle-sprain-recovery-exercises',
    title: 'Ankle Sprain Recovery: From Injury to Full Strength',
    excerpt: 'Rolled your ankle? Here\'s how to recover properly and prevent the chronic instability that plagues most people.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '7 min read'
  },
  {
    slug: 'tennis-elbow-lateral-epicondylitis',
    title: 'Tennis Elbow: Causes, Exercises, and How to Finally Get Rid of It',
    excerpt: 'That nagging pain on the outside of your elbow? Here\'s what causes tennis elbow and the proven exercises that heal it.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '7 min read'
  },
  {
    slug: 'sciatica-exercises-relief',
    title: 'Sciatica: Exercises That Help, Exercises to Avoid, and When to See a Doctor',
    excerpt: 'Shooting pain down your leg? Here\'s what actually works for sciatica—and what makes it worse.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Pain',
    readTime: '8 min read'
  },
  {
    slug: 'frozen-shoulder-exercises-treatment',
    title: 'Frozen Shoulder: What It Is, How Long It Lasts, and Exercises That Speed Recovery',
    excerpt: 'Can\'t lift your arm? Frozen shoulder is frustrating but treatable. Here\'s the timeline and what to do at each stage.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '7 min read'
  },
  {
    slug: 'shin-splints-treatment-prevention',
    title: 'Shin Splints: Why They Happen and How to Get Rid of Them for Good',
    excerpt: 'Shin pain ruining your runs? Here\'s what causes shin splints and how to fix them—plus prevent them from coming back.',
    date: '2026-03-06',
    author: 'Foundational Rehab',
    category: 'Sports',
    readTime: '6 min read'
  },
  {
    slug: 'golf-back-pain-prevention',
    title: 'Golf and Back Pain: Why It Happens and How to Play Pain-Free',
    excerpt: 'Back pain ruining your golf game? Here\'s what causes it and how to keep swinging without hurting.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Sports',
    readTime: '7 min read'
  },
  {
    slug: 'swimmers-shoulder-treatment',
    title: 'Swimmer\'s Shoulder: Causes, Treatment, and Getting Back in the Pool',
    excerpt: 'Shoulder pain from swimming? Here\'s why it happens and how to fix it without giving up the sport you love.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Sports',
    readTime: '7 min read'
  },
  {
    slug: 'labral-tear-hip-shoulder',
    title: 'Labral Tears: Hip and Shoulder Symptoms, Treatment, and Recovery',
    excerpt: 'Diagnosed with a labral tear? Here\'s what it means, when you need surgery, and how to rehab effectively.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '8 min read'
  },
  {
    slug: 'post-surgery-rehab-guide',
    title: 'Post-Surgery Rehabilitation: The Complete Guide to Recovery',
    excerpt: 'Had surgery? Here\'s the framework for rehab that applies to nearly any orthopedic procedure—and how to optimize your recovery.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '8 min read'
  },
  {
    slug: 'pelvic-floor-exercises-guide',
    title: 'Pelvic Floor Exercises: A Complete Guide for Everyone (Not Just New Moms)',
    excerpt: 'Leaking, pain, or dysfunction? Your pelvic floor might be the culprit. Here\'s how to strengthen—and relax—these essential muscles.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'chronic-pain-management-exercise',
    title: 'Chronic Pain: How Exercise Helps and How to Start When Everything Hurts',
    excerpt: 'In pain for months or years? Exercise might be the last thing you want, but it\'s often the best medicine. Here\'s how to do it right.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '8 min read'
  },
  {
    slug: 'hypermobility-joint-laxity-exercises',
    title: 'Hypermobility: Why Being "Too Flexible" Can Cause Pain and How to Manage It',
    excerpt: 'Super flexible but always in pain? You might be hypermobile. Here\'s how to build stability and protect your joints.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'kyphosis-rounded-upper-back-exercises',
    title: 'Kyphosis: Exercises to Fix Rounded Upper Back and Improve Posture',
    excerpt: 'Noticing a hump at the top of your back? Here\'s what causes kyphosis and the exercises that help straighten your spine.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'diastasis-recti-postpartum-recovery',
    title: 'Diastasis Recti: Understanding, Healing, and Rebuilding Your Core After Pregnancy',
    excerpt: 'Noticed a gap in your abs after pregnancy? Here\'s what diastasis recti actually is and how to heal it properly.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'vertigo-vestibular-exercises',
    title: 'Vertigo and Dizziness: Exercises That Actually Help',
    excerpt: 'Room spinning? Here\'s what causes vertigo and the specific exercises that can resolve it—often in just a few sessions.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'acl-injury-recovery-guide',
    title: 'ACL Injury: Surgery, Recovery, and Getting Back to Sports',
    excerpt: 'Torn your ACL? Here\'s what to expect from surgery, rehab timelines, and how to return to full activity safely.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '9 min read'
  },
  {
    slug: 'scoliosis-exercises-management',
    title: 'Scoliosis: Exercises, Treatment Options, and Living Well With a Curved Spine',
    excerpt: 'Diagnosed with scoliosis? Here\'s what actually helps, what doesn\'t, and how to manage it for life.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'osteoporosis-exercise-bone-health',
    title: 'Osteoporosis and Exercise: How to Build Stronger Bones at Any Age',
    excerpt: 'Worried about bone density? Here\'s the evidence-based guide to exercise for bone health and osteoporosis management.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'meniscus-tear-symptoms-treatment',
    title: 'Meniscus Tear: Symptoms, Treatment Options, and Recovery',
    excerpt: 'Knee pain and clicking? Here\'s how to know if it\'s a meniscus tear, when surgery is needed, and how to recover fully.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Injury',
    readTime: '8 min read'
  },
  {
    slug: 'return-to-running-after-injury',
    title: 'How to Return to Running After an Injury: The Complete Guide',
    excerpt: 'Ready to run again but worried about re-injury? Here\'s the evidence-based approach to building back safely.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Training',
    readTime: '7 min read'
  },
  {
    slug: 'pickleball-injuries-prevention-treatment',
    title: 'Pickleball Injuries: Prevention, Treatment, and Getting Back on the Court',
    excerpt: 'The fastest-growing sport comes with unique injury patterns. Here\'s how to stay healthy and recover when you don\'t.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Sports',
    readTime: '7 min read'
  },
  {
    slug: 'flat-feet-treatment-exercises',
    title: 'Flat Feet: Do They Need Fixing? Exercises, Orthotics, and the Truth',
    excerpt: 'Told you have flat feet? Here\'s what actually matters, when to intervene, and exercises that help.',
    date: '2026-03-05',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'protein-for-muscle-building',
    title: 'Protein for Muscle Building: How Much You Actually Need',
    excerpt: 'Confused about protein? Here\'s the evidence-based guide to how much protein you need, when to eat it, and the best sources.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Nutrition',
    readTime: '7 min read'
  },
  {
    slug: 'sleep-and-muscle-recovery',
    title: 'Sleep and Muscle Recovery: Why Rest Is When You Actually Get Stronger',
    excerpt: 'You can\'t out-train bad sleep. Here\'s why sleep is essential for muscle growth, recovery, and performance.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '6 min read'
  },
  {
    slug: 'bodyweight-exercises-complete-guide',
    title: 'Bodyweight Exercises: Build Strength Anywhere Without Equipment',
    excerpt: 'No gym? No problem. Here\'s how to build real strength using just your body weight.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Training',
    readTime: '8 min read'
  },
  {
    slug: 'progressive-overload-explained',
    title: 'Progressive Overload: The Only Way to Keep Getting Stronger',
    excerpt: 'Not making progress anymore? You might be missing the most important principle in fitness. Here\'s how to apply progressive overload.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Training',
    readTime: '6 min read'
  },
  {
    slug: 'exercise-for-mental-health',
    title: 'Exercise for Mental Health: What the Research Actually Shows',
    excerpt: 'Exercise isn\'t just for your body. Here\'s how physical activity affects anxiety, depression, and overall mental wellbeing.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Lifestyle',
    readTime: '7 min read'
  },
  {
    slug: 'bursitis-causes-treatment',
    title: 'Bursitis: What It Is, Why It Happens, and How to Treat It',
    excerpt: 'Hip, shoulder, or knee bursitis causing pain? Here\'s what\'s actually inflamed and how to calm it down for good.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '7 min read'
  },
  {
    slug: 'muscle-soreness-vs-injury',
    title: 'Muscle Soreness vs. Injury: How to Tell the Difference',
    excerpt: 'Is that post-workout ache normal soreness or something worse? Here\'s how to know when to push through and when to back off.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '6 min read'
  },
  {
    slug: 'how-long-see-fitness-results',
    title: 'How Long Does It Take to See Results From Exercise?',
    excerpt: 'You\'ve started working out—when will you see changes? Here\'s the realistic timeline for strength, muscle, and fitness gains.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Training',
    readTime: '6 min read'
  },
  {
    slug: 'active-recovery-rest-days',
    title: 'Active Recovery: What to Do on Rest Days',
    excerpt: 'Rest days don\'t mean sitting on the couch. Here\'s how active recovery speeds healing and keeps you moving.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '6 min read'
  },
  {
    slug: 'strength-training-over-50',
    title: 'Strength Training Over 50: It\'s Never Too Late to Start',
    excerpt: 'Think you\'re too old to lift weights? Science says otherwise. Here\'s how to build strength safely at any age.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Training',
    readTime: '7 min read'
  },
  {
    slug: 'strength-training-beginners-guide',
    title: 'Strength Training for Beginners: How to Start Lifting Weights',
    excerpt: 'New to strength training? Here\'s everything you need to know to start building muscle safely and effectively.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Training',
    readTime: '9 min read'
  },
  {
    slug: 'desk-job-pain-exercises',
    title: 'Desk Job Pain: Exercises to Undo the Damage of Sitting All Day',
    excerpt: 'Sitting all day wreaks havoc on your body. Here are the exercises that counteract desk work and keep you pain-free.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Lifestyle',
    readTime: '7 min read'
  },
  {
    slug: 'proper-warm-up-guide',
    title: 'How to Warm Up Properly: The Science-Based Approach',
    excerpt: 'Still doing static stretches before exercise? There\'s a better way. Here\'s how to warm up for peak performance and injury prevention.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Training',
    readTime: '6 min read'
  },
  {
    slug: 'how-to-squat-properly',
    title: 'How to Squat Properly: Form, Depth, and Common Mistakes',
    excerpt: 'The squat is the king of exercises—when done right. Here\'s how to squat safely and effectively for your body.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Movement',
    readTime: '8 min read'
  },
  {
    slug: 'deadlift-form-back-safety',
    title: 'Deadlift Form: How to Lift Heavy Without Hurting Your Back',
    excerpt: 'Deadlifts build total-body strength—if you do them right. Here\'s how to master the form and protect your spine.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Movement',
    readTime: '8 min read'
  },
  {
    slug: 'hip-mobility-for-squats',
    title: 'Hip Mobility for Squats: How to Get Deeper and Move Better',
    excerpt: 'Can\'t squat deep? Your hips might be the problem. Here\'s how to unlock the mobility you need.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Mobility',
    readTime: '7 min read'
  },
  {
    slug: 'thoracic-spine-mobility',
    title: 'Thoracic Mobility: The Missing Link in Your Movement',
    excerpt: 'Your upper back might be the cause of your shoulder, neck, or lower back problems. Here\'s how to unlock thoracic mobility.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Back',
    readTime: '7 min read'
  },
  {
    slug: 'exercise-after-40-strength-training',
    title: 'Exercise After 40: How to Train Smarter as You Age',
    excerpt: 'Your body changes after 40, but that doesn\'t mean you can\'t get stronger. Here\'s how to adapt your training for lasting results.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Lifestyle',
    readTime: '8 min read'
  },
  {
    slug: 'wrist-pain-strengthening-exercises',
    title: 'Wrist Pain: Causes, Exercises, and How to Protect Your Wrists',
    excerpt: 'Wrist pain from typing, lifting, or yoga? Here\'s how to identify the problem and build stronger, pain-free wrists.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Arms',
    readTime: '6 min read'
  },
  {
    slug: 'piriformis-syndrome-treatment',
    title: 'Piriformis Syndrome: The Hidden Cause of Buttock and Leg Pain',
    excerpt: 'Pain deep in your buttock that shoots down your leg? It might not be sciatica—it could be piriformis syndrome. Here\'s how to tell and what to do.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Hips',
    readTime: '7 min read'
  },
  {
    slug: 'ankle-mobility-exercises',
    title: 'Ankle Mobility: Why It Matters and How to Improve It',
    excerpt: 'Limited ankle mobility affects your squat, your running, and your risk of injury. Here\'s how to assess and improve yours.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Ankles',
    readTime: '6 min read'
  },
  {
    slug: 'groin-strain-adductor-injury',
    title: 'Groin Strain: Recovery, Exercises, and Preventing Re-Injury',
    excerpt: 'Pulled your groin? These injuries are notorious for recurring. Here\'s the evidence-based approach to full recovery.',
    date: '2026-03-04',
    author: 'Foundational Rehab',
    category: 'Hips',
    readTime: '7 min read'
  },
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
