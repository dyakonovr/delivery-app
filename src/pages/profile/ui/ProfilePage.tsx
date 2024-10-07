import classes from "./styles.module.css";
import { Container, LoadingSpin, Typography } from "@/shared/ui";
import { ProfilePageForm } from "@/pages/profile/ui/Form.tsx";
import { useUserStore } from "@/entities/user";

export function ProfilePage() {
  const userIsLoading = useUserStore((state) => state.user === null);

  return (
    <Container className={"default-page-vertical-offsets"}>
      <Typography variant={"title"} tag={"h1"}>
        Профиль
      </Typography>
      {userIsLoading && <LoadingSpin className={classes["profile_page_loader"]} />}
      {!userIsLoading && <ProfilePageForm />}
    </Container>
  );
}
