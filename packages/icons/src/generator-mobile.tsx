import { mdiGeneratorMobile } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GeneratorMobile(props: IconComponentProps) {
  return <Icon path={mdiGeneratorMobile} {...props} />;
}

export { mdiGeneratorMobile as path };
