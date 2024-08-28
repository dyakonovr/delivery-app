import { Link } from "@tanstack/react-router";
import classes from "./styles.module.css";
import { AuthButton } from "./AuthButton";
import { Container, Logo } from "@/shared/ui";
import { PagePaths } from "@/shared/config";

export function Header() {
  return (
    <div className={classes.header}>
      <Container className={classes.header_container}>
        <Link to={PagePaths.HOME}>
          <Logo />
        </Link>
        <AuthButton />
      </Container>
    </div>
  );
}
