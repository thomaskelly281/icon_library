import { mdiRabbitVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RabbitVariant(props: IconComponentProps) {
  return <Icon path={mdiRabbitVariant} {...props} />;
}

export { mdiRabbitVariant as path };
