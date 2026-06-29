import { mdiHomeRoof } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeRoof(props: IconComponentProps) {
  return <Icon path={mdiHomeRoof} {...props} />;
}

export { mdiHomeRoof as path };
