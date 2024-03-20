export default function PrivacyPolicy() {
  return (
    <>
      <header className="bg-blue-500 text-white text-center py-2">
        <h1 className="text-xl font-bold">Privacy Policy</h1>
      </header>

      <main className="max-w-3xl mx-auto py-8 px-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-2 text-xs">
            We may collect the following types of personal information when you
            visit our website or use our services:
          </p>
          <ul className="list-disc pl-6 text-xs">
            <li>Name</li>
            <li>Email address</li>
            <li>Mailing address</li>
            <li>Phone number</li>
            <li>Payment information</li>
            <li>IP address</li>
            <li>Usage data (e.g., cookies, web beacons)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Changes to the Policy</h2>
          <p className="mb-2 text-xs">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the updated policy on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2 text-xs">
            If you have any questions or concerns about this Privacy Policy or
            your personal information, please contact us at:
          </p>
          <ul className="list-disc pl-6 text-xs">
            <li>Email: cv@cityvibe.com</li>
            <li>Address: New York, NY</li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-500 text-white py-2 text-center">
        <p className="text-sm">Contact Us: cv@cityvibe.com</p>
      </footer>
    </>
  );
}
