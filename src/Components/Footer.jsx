import { DATA } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Designed &amp; built by <span>{DATA.name}</span> · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
