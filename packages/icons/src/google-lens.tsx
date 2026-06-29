import { mdiGoogleLens } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleLens(props: IconComponentProps) {
  return <Icon path={mdiGoogleLens} {...props} />;
}

export { mdiGoogleLens as path };
