import { mdiBeekeeper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Beekeeper(props: IconComponentProps) {
  return <Icon path={mdiBeekeeper} {...props} />;
}

export { mdiBeekeeper as path };
