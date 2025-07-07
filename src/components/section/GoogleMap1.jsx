export default function GoogleMap1() {
  return (
    <>
      <section className="p-0 wow fadeInUp" data-wow-delay="300ms">
        <div className="mx-auto maxw1700 bdrs16 position-relative mx20-lg">
          <iframe
            className="contact-page-map"
            loading="lazy"
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
            title="London Eye, London, United Kingdom"
            aria-label="London Eye, London, United Kingdom"
          />
        </div>
      </section>
    </>
  );
}
