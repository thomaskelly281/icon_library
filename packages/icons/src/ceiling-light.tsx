import { mdiCeilingLight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CeilingLight(props: IconComponentProps) {
  return <Icon path={mdiCeilingLight} {...props} />;
}

export { mdiCeilingLight as path };
