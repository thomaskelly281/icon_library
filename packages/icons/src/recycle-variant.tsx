import { mdiRecycleVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RecycleVariant(props: IconComponentProps) {
  return <Icon path={mdiRecycleVariant} {...props} />;
}

export { mdiRecycleVariant as path };
