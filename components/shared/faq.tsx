import React from "react";

export const FaqSection = () => {
  return (
    <section className="w-full px-4 md:px-20 lg:px-0 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-xl font-semibold text-neutral-800 mb-10">
          Very frequently asked questions
        </h2>

        {/* FAQ Item 1 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-neutral-800 mb-2">
             How does PeerSearch discover best people?
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            PeerSearch scans the Peerlist's profiles which is a community for all tech professionals, especially designers and developers.
            The platform is built with tech professionals in mind, offering a comprehensive profile to
            showcase your work across the internet—whether it's projects, open-source contributions, design work, or more.
            </p>
          <p className="text-gray-700 text-base leading-relaxed">
            PeerSearch scans the best peerlist's profiles that matches you need and show you their portfolios, websites and professional profile. So that you can easily find the best talent based on your need.
           </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-neutral-800 mb-2">
           Can I filter candidates by tech stack, location, or recent activity?          
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
           Yes. You can run intent-based, role-based searches like
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
           "The best React developer"
            PeerSearch supports filters by tech-stack, intent, roles, so you can target exactly the kind of builder you're looking for.          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-neutral-800 mb-2">
            How is PeerSearch different from LinkedIn or traditional job boards?          
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            PeerSearch scans the Peerlist's profiles which is a community for all tech professionals, especially designers and developers.
            The platform is built with tech professionals in mind, offering a comprehensive profile to
            showcase your work across the internet—whether it's projects, open-source contributions, design work, or more.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Which gives the unfair advantage of real active and best developers in the market who is building in public. So you can find the best talent in the market.
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-neutral-800 mb-2">
            Is it free to find and reach out to builders?
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Yes — discovery is completely free. You can browse profiles and view public activity. For advanced features like saved searches, team access, or direct outreach tools, a recruiter plan will be available soon.
          </p>
        </div>
      </div>
    </section>
  );
};
