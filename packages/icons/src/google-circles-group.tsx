import { mdiGoogleCirclesGroup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleCirclesGroup(props: IconComponentProps) {
  return <Icon path={mdiGoogleCirclesGroup} {...props} />;
}

export { mdiGoogleCirclesGroup as path };
