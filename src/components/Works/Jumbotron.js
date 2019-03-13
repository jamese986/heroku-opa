import React from "react";
import { Link } from "react-router-dom";

export default function Jumbotron() {
  return (
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Portfolio / Works</h1>
          <p className="lead text-muted">
            Below are a some of pieces from my past works which I have
            undertaken. Unfortunatley some pieces are not avaliable online so I
            have the physical copies with me today.
          </p>
          <p>
            <Link
              href="https://github.com/jamese986/"
              className="btn btn-primary my-2"
            >
              GitHub
            </Link>
            <Link href="#" className="btn btn-secondary my-2">
              Nebula
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
