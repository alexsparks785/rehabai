# Video Generation Options for RehabAI

## Goal
Generate AI exercise tutorial videos showing proper form, movements, and transitions.

## Options Evaluated

### 1. Luma Labs (Ray2) ⭐ RECOMMENDED
- **URL**: https://lumalabs.ai/api
- **Capabilities**:
  - Text-to-video, Image-to-video
  - Camera control via natural language
  - Extend videos, create loops
  - Variable aspect ratios
  - "Natural motion" - good for human movement
- **Pricing**: ~$0.016 per 1080p generation (very affordable)
- **Pros**: 
  - Production-ready quality
  - Fast generation
  - Great for human motion/action
  - Simple API
- **Cons**: 
  - May need fine-tuning prompts for exercise demos

### 2. Replicate
- **URL**: https://replicate.com
- **Capabilities**: 
  - Access to many video models (Stable Video Diffusion, etc.)
  - Python SDK available
  - Pay-per-use
- **Pros**:
  - Variety of models to choose from
  - Easy to switch between models
- **Cons**:
  - Need to evaluate multiple models
  - Quality varies

### 3. Runway ML (Gen-3/Gen-4)
- **URL**: https://runwayml.com
- **Capabilities**:
  - High-quality video generation
  - Motion brush, camera control
- **Pros**:
  - Very high quality output
- **Cons**:
  - More expensive
  - API access may be limited

### 4. Seedance 2.0 (ByteDance)
- **URL**: jimeng.jianying.com
- **Capabilities**:
  - Multimodal (image, video, audio, text inputs)
  - Reference video capability (copy movements)
  - 2K video, 4-15 seconds
- **Pros**:
  - Can reference existing exercise videos for style/movement
  - High quality
- **Cons**:
  - China-only beta
  - No public API yet

## Recommended Approach

### Phase 1: MVP (Now)
- Use placeholder images/GIFs
- Focus on app UX and program generation
- Manually source some stock exercise videos

### Phase 2: AI Video Integration
1. Start with **Luma Ray2** for text-to-video generation
2. Use reference images of exercises as starting frames
3. Generate short (5-10 second) clips per exercise phase

### Phase 3: Advanced
- Train custom model on exercise footage for consistency
- Use Seedance when available for reference-based generation
- Implement character consistency across all videos

## Prompt Engineering for Exercise Videos

Example prompts for Luma Ray2:
```
"Professional fitness instructor demonstrating a bird dog exercise. 
Starting position on hands and knees, then extending right arm forward 
and left leg back. Side view, gym setting, clean background, 
instructional fitness video style."
```

```
"Slow motion demonstration of a glute bridge exercise. 
Person lying on back, knees bent, lifting hips toward ceiling. 
Focus on proper form, studio lighting, fitness tutorial aesthetic."
```

## Cost Estimate

For 50 exercises with 3 video clips each (150 total):
- Luma Ray2 @ $0.016/video = ~$2.40
- With iterations/variations: ~$10-20 total

Very affordable for experimentation.
