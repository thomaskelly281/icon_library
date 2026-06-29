import { mdiSignatureFreehand } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignatureFreehand(props: IconComponentProps) {
  return <Icon path={mdiSignatureFreehand} {...props} />;
}

export { mdiSignatureFreehand as path };
