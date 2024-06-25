import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Nav() {
    return (
    <>
    <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">หน้าแรก</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact">บริการของเรา</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/service">ติดต่อเรา</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <center>
    <Link href="/" className="btn btn-warning">หน้าแรก</Link> |
    <Link href="/about" className="btn btn-warning">เกี่ยวกับเรา</Link> |
    <Link href="/contact" className="btn btn-warning">บริการของเรา</Link> |
    <Link href="/service" className="btn btn-warning">ติดต่อเรา</Link> 
    </center>
    </>
  );
}