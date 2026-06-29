import { mdiRectangle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rectangle(props: IconComponentProps) {
  return <Icon path={mdiRectangle} {...props} />;
}

export { mdiRectangle as path };
