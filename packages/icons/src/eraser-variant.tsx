import { mdiEraserVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EraserVariant(props: IconComponentProps) {
  return <Icon path={mdiEraserVariant} {...props} />;
}

export { mdiEraserVariant as path };
