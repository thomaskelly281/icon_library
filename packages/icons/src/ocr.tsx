import { mdiOcr } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ocr(props: IconComponentProps) {
  return <Icon path={mdiOcr} {...props} />;
}

export { mdiOcr as path };
