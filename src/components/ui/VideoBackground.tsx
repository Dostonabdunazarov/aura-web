import bgVideo from '../../assets/bg.mp4'

/**
 * Global fixed video background rendered once behind all page content.
 * Sections sit on top with translucent glass backgrounds so the video
 * shows through, creating a depth effect. A subtle gradient overlay keeps
 * foreground text readable regardless of the video frame.
 */
export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Readability overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(15,10,6,0.45) 0%, rgba(15,10,6,0.55) 50%, rgba(15,10,6,0.65) 100%)',
        }}
      />
    </div>
  )
}
