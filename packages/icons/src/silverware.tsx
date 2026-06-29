import { mdiSilverware } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Silverware(props: IconComponentProps) {
  return <Icon path={mdiSilverware} {...props} />;
}

export { mdiSilverware as path };
