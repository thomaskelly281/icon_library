import { mdiGoogleDownasaur } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleDownasaur(props: IconComponentProps) {
  return <Icon path={mdiGoogleDownasaur} {...props} />;
}

export { mdiGoogleDownasaur as path };
