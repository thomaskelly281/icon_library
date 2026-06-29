import { mdiGoogleFit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleFit(props: IconComponentProps) {
  return <Icon path={mdiGoogleFit} {...props} />;
}

export { mdiGoogleFit as path };
