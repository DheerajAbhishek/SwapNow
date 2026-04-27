import os
from moviepy import VideoFileClip

VIDEO_DIR = "src/assets/videos"

for filename in os.listdir(VIDEO_DIR):
    if filename.endswith(".mp4") and not filename.startswith("compressed_"):
        filepath = os.path.join(VIDEO_DIR, filename)
        output_path = os.path.join(VIDEO_DIR, f"compressed_{filename}")
        
        print(f"Compressing {filename}...")
        try:
            clip = VideoFileClip(filepath)
            clip.write_videofile(
                output_path,
                codec="libx264",
                audio_codec="aac",
                bitrate="800k",
                preset="fast"
            )
            print(f"Saved to {output_path}")
        except Exception as e:
            print(f"Failed to compress {filename}: {e}")
