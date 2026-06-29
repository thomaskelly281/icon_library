import { mdiGoogleCircles } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleCircles(props: IconComponentProps) {
  return <Icon path={mdiGoogleCircles} {...props} />;
}

export { mdiGoogleCircles as path };
