import { mdiContentSaveCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveCog(props: IconComponentProps) {
  return <Icon path={mdiContentSaveCog} {...props} />;
}

export { mdiContentSaveCog as path };
