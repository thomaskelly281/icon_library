import { mdiRocket } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rocket(props: IconComponentProps) {
  return <Icon path={mdiRocket} {...props} />;
}

export { mdiRocket as path };
