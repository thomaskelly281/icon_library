import { mdiSignLanguage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignLanguage(props: IconComponentProps) {
  return <Icon path={mdiSignLanguage} {...props} />;
}

export { mdiSignLanguage as path };
