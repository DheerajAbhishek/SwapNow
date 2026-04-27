import os
from moviepy import VideoFileClip

VIDEO_DIR = "src/assets/videos"

for filename in os.listdir(VIDEO_DIR):
    if filename.endswith(".mp4") and not filename.startswith("comp_"):
        filepath = os.path.join(VIDEO_DIR, filename)
        output_path = os.path.join(VIDEO_DIR, f"comp_{filename}")
        
        # Skip if already exists
        if os.path.exists(output_path):
            continue
            
        print(f"Compressing {filename}...")
        try:
            clip = VideoFileClip(filepath)
            
            # Resize the video directly scaling the height down to 720p if it's larger
            if clip.h > 720:
                clip = clip.resized(height=720)

            clip.write_videofile(
                output_path,
                codec="libx264",
                audio_codec="aac",
                bitrate="500k",
                preset="medium",
                threads=1 # Limit threads to prevent memory explosion
            )
            print(f"Saved to {output_path}")
            clip.close()
        except Exception as e:
            print(f"Failed to compress {filename}: {e}")
