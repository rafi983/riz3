"use client";

import { m } from "@/providers/MotionProvider";

const ContactHero = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-mono">
        $ ./contact.sh --init
      </h1>

      <div className="flex justify-center mb-8">
        <div className="terminal max-w-3xl text-left">
          <div className="terminal-header">contact@rafizaman:~$</div>
          <div className="font-mono text-sm">
            <span className="text-terminal-green">$</span>{" "}
            <span className="text-terminal-blue">ping collaboration.network</span>
            <br />
            <span className="text-text-secondary">
              PING collaboration.network (192.168.1.1): 56 data bytes
            </span>
            <br />
            <span className="text-text-secondary">
              64 bytes from developer: icmp_seq=0 ttl=64 time=0.1ms
            </span>
            <br />
            <span className="text-terminal-green">$</span>{" "}
            <span className="text-terminal-blue">
              echo "Always ready to connect!"
            </span>
            <br />
            <span className="text-text-secondary">Always ready to connect!</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <div className="badge badge-success">
          <span className="mr-2">●</span>
          Available
        </div>
        <div className="badge badge-info">
          <span className="mr-2">💬</span>
          Open to Chat
        </div>
        <div className="badge badge-warning">
          <span className="mr-2">🤝</span>
          Let's Collaborate
        </div>
      </div>
    </m.div>
  );
};

export default ContactHero;
