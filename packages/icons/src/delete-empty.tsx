import { mdiDeleteEmpty } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteEmpty(props: IconComponentProps) {
  return <Icon path={mdiDeleteEmpty} {...props} />;
}

export { mdiDeleteEmpty as path };
