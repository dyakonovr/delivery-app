import { Link } from "@tanstack/react-router";
import classes from "./styles.module.css";
import { AuthButton } from "./AuthButton";
import { Navigation } from "./Navigation";
import { Container, Logo } from "@/shared/ui";
import { PagePaths } from "@/shared/config";

export function Header() {
  return (
    <header className={classes.header}>
      <Container className={classes.header_container}>
        <Link to={PagePaths.HOME}>
          <Logo />
        </Link>
        <Navigation />
        <AuthButton />
      </Container>
    </header>
  );
}
