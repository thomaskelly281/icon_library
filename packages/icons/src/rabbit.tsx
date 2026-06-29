import { mdiRabbit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rabbit(props: IconComponentProps) {
  return <Icon path={mdiRabbit} {...props} />;
}

export { mdiRabbit as path };
