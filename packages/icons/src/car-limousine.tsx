import { mdiCarLimousine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarLimousine(props: IconComponentProps) {
  return <Icon path={mdiCarLimousine} {...props} />;
}

export { mdiCarLimousine as path };
