import { mdiCastVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CastVariant(props: IconComponentProps) {
  return <Icon path={mdiCastVariant} {...props} />;
}

export { mdiCastVariant as path };
