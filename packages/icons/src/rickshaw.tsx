import { mdiRickshaw } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rickshaw(props: IconComponentProps) {
  return <Icon path={mdiRickshaw} {...props} />;
}

export { mdiRickshaw as path };
