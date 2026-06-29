import { mdiApple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Apple(props: IconComponentProps) {
  return <Icon path={mdiApple} {...props} />;
}

export { mdiApple as path };
