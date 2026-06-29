import { mdiGenderTransgender } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GenderTransgender(props: IconComponentProps) {
  return <Icon path={mdiGenderTransgender} {...props} />;
}

export { mdiGenderTransgender as path };
