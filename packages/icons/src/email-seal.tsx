import { mdiEmailSeal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailSeal(props: IconComponentProps) {
  return <Icon path={mdiEmailSeal} {...props} />;
}

export { mdiEmailSeal as path };
