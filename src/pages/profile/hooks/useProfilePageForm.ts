import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Control } from "react-hook-form";
import type { ProfileFormSchema } from "@/pages/profile/model";
import type { ProfilePageFormField } from "@/pages/profile/ui/Form.tsx";
import { profileFormSchema } from "@/pages/profile/model";
import { useUserStore } from "@/entities/user";
import { useUpdateProfileMutation } from "@/shared/api";
import { GRAPHQL_AUTHORIZATION_CONTEXT } from "@/shared/config";

interface UseProfilePageForm {
  fields: ProfilePageFormField[][];
  control: Control<ProfileFormSchema>;
  onSubmitFx: () => void;
}

export const useProfilePageForm = (): UseProfilePageForm => {
  const { user, setUser } = useUserStore();

  console.log("@user:", user);

  const fields: ProfilePageFormField[][] = [
    [
      {
        name: "lastname",
        inputProps: {
          labelText: "Фамилия"
        }
      },
      {
        name: "firstname",
        inputProps: {
          labelText: "Имя"
        }
      },
      {
        name: "middlename",
        inputProps: {
          labelText: "Отчество"
        }
      }
    ],
    [
      {
        name: "phone",
        inputProps: {
          labelText: "Номер телефона",
          disabled: true
        }
      },
      {
        name: "email",
        inputProps: {
          labelText: "Email"
        }
      },
      {
        name: "city",
        inputProps: {
          labelText: "Город"
        }
      }
    ]
  ];

  const { handleSubmit, control } = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      email: user?.email ?? "Test",
      city: user?.city ?? "",
      phone: user?.phone ?? "",
      firstname: user?.firstname ?? "",
      lastname: user?.lastname ?? "",
      middlename: user?.middlename ?? ""
    }
  });

  const [updateProfile] = useUpdateProfileMutation({ ...GRAPHQL_AUTHORIZATION_CONTEXT });

  // Functions
  async function onSubmit(formData: ProfileFormSchema) {
    try {
      const { phone, ...restData } = formData;
      await updateProfile({ variables: { phone, profile: restData } });

      // If I try to get 'user' from the API, I get an error ¯\_(ツ)_/¯
      if (!user) throw new Error("Unexpected error!");
      setUser({ _id: user?._id, ...formData });
    } catch (error) {
      console.error("Update profile error:", error);
    }
  }
  // Functions END

  return {
    onSubmitFx: handleSubmit(onSubmit),
    control,
    fields
  };
};
